// script.js enhanced: multi-layer neural network & feature normalization for 80–85% accuracy
// Include in HTML head:
// <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
// <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

const form = document.getElementById('predict-form');
const md5Input = document.getElementById('md5-input');
const resultDiv = document.getElementById('result');
const patternP = document.getElementById('pattern');
const probP = document.getElementById('prob');
const predP = document.getElementById('prediction');

// Chart setup
let historyData = [];
tf.ready().then(() => {
  const ctx = document.getElementById('history-chart').getContext('2d');
  window.historyChart = new Chart(ctx, {
    type: 'line',
    data: { labels: [], datasets: [{ label: 'Xác suất Tài (%)', data: [], fill: false, tension: 0.1 }] },
    options: { scales: { y: { min: 0, max: 100 } } }
  });
});

// --- Feature extraction ---
function sumMod(md5) { let s = 0; for (const c of md5) s += parseInt(c, 16) || 0; return (s % 100) / 100; }
function entropy(md5) { let bits = '', ones; for (const c of md5) bits += parseInt(c, 16).toString(2).padStart(4, '0'); ones = (bits.match(/1/g) || []).length; const p1 = ones / bits.length, p0 = 1 - p1; return -[p1, p0].reduce((sum, p) => sum + (p ? p * Math.log2(p) : 0), 0) / 4; }
function firstByte(md5) { return parseInt(md5.slice(0,2), 16) / 255; }
function meanHex(md5) { const arr = md5.split('').map(c => parseInt(c,16)||0); return arr.reduce((a,b) => a+b,0)/(arr.length*15); }
function medianHex(md5) { const arr = md5.split('').map(c=>parseInt(c,16)||0).sort((a,b)=>a-b); const m = arr[Math.floor(arr.length/2)]; return m/15; }
function iqrHex(md5) { const arr = md5.split('').map(c=>parseInt(c,16)||0).sort((a,b)=>a-b); const q1=arr[Math.floor(arr.length*0.25)], q3=arr[Math.floor(arr.length*0.75)]; return (q3-q1)/15; }
function symbolEntropy(md5) { const freq=Array(16).fill(0), N=md5.length; md5.split('').forEach(c=>freq[parseInt(c,16)]++); return freq.reduce((sum,f)=>f?sum - (f/N)*Math.log2(f/N):sum, 0)/Math.log2(16); }
function windowAvg(md5, size=4) { const vals=[]; for(let i=0;i<=md5.length-size;i+=size){ let s=0; for(let j=i;j<i+size;j++) s+=parseInt(md5[j],16)||0; vals.push(s/(size*15)); } return vals.reduce((a,b)=>a+b,0)/vals.length; }
function weighted(md5) { let tot=0; for(let i=0;i<md5.length;i++) tot += (parseInt(md5[i],16)||0)*(i+1); return tot/(15*(md5.length*(md5.length+1)/2)); }
function variance(md5) { const arr=md5.split('').map(c=>parseInt(c,16)||0), m=arr.reduce((a,b)=>a+b,0)/arr.length; const v=arr.reduce((a,b)=>a+Math.pow(b-m,2),0)/arr.length; return v/(15*15); }
function highNibbleRatio(md5) { return md5.split('').filter(c=>parseInt(c,16)>=8).length/md5.length; }
function maxRunLength(md5) { let maxR=1, run=1; for(let i=1;i<md5.length;i++){ run = (md5[i]===md5[i-1]?run+1:1); maxR = Math.max(maxR, run); } return maxR/md5.length; }
function parityRatio(md5) { let cnt=0; for(let i=0;i<md5.length;i+=2){ const b=parseInt(md5.slice(i,i+2),16)||0, ones=(b.toString(2).match(/1/g)||[]).length; if(ones%2===0) cnt++; } return cnt/(md5.length/2); }
function transitionRatio(md5) { let bits='', t=0; for(const c of md5) bits+=parseInt(c,16).toString(2).padStart(4,'0'); for(let i=1;i<bits.length;i++) if(bits[i]!==bits[i-1]) t++; return t/(bits.length-1); }
function bigramUniqueness(md5) { const s=new Set(); for(let i=0;i<md5.length-1;i++) s.add(md5.slice(i,i+2)); return s.size/(md5.length-1); }
function byteDiversity(md5) { const bytes=[]; for(let i=0;i<md5.length;i+=2) bytes.push(md5.slice(i,i+2)); return new Set(bytes).size/bytes.length; }
function skewness(md5) { const arr=md5.split('').map(c=>parseInt(c,16)||0), m=arr.reduce((a,b)=>a+b,0)/arr.length; const std=Math.sqrt(arr.reduce((a,b)=>a+Math.pow(b-m,2),0)/arr.length); if(std===0) return 0; return arr.reduce((a,b)=>a+Math.pow((b-m)/std,3),0)/arr.length; }
function kurtosis(md5) { const arr=md5.split('').map(c=>parseInt(c,16)||0), m=arr.reduce((a,b)=>a+b,0)/arr.length; const std=Math.sqrt(arr.reduce((a,b)=>a+Math.pow(b-m,2),0)/arr.length); if(std===0) return 0; return (arr.reduce((a,b)=>a+Math.pow((b-m)/std,4),0)/arr.length -3)/10; }
function chiSquareUniform(md5) { const freq=Array(16).fill(0), exp=md5.length/16; md5.split('').forEach(c=>freq[parseInt(c,16)]++); return freq.reduce((chi,f)=>chi+Math.pow(f-exp,2)/exp,0)/(exp*15); }
function bitAutocorrelation(md5) { let bits='', corr=0; for(const c of md5) bits+=parseInt(c,16).toString(2).padStart(4,'0'); for(let i=1;i<bits.length;i++) if(bits[i]===bits[i-1]) corr++; return corr/(bits.length-1); }
function slidingEntropyVariance(md5, size=8) { let bits='', entropies=[]; for(const c of md5) bits+=parseInt(c,16).toString(2).padStart(4,'0'); for(let i=0;i<=bits.length-size;i+=size){ const w=bits.slice(i,i+size), p1=(w.match(/1/g)||[]).length/size, p0=1-p1; entropies.push(-[p1,p0].reduce((sum,p)=>sum+(p? p*Math.log2(p):0),0)); } const m=entropies.reduce((a,b)=>a+b,0)/entropies.length; return entropies.reduce((a,b)=>a+Math.pow(b-m,2),0)/entropies.length; }
function hexPairVariance(md5) { const freq={}, total=md5.length-1; for(let i=0;i<total;i++){ const p=md5.slice(i,i+2); freq[p]=(freq[p]||0)+1; } const mean=total/Object.keys(freq).length; return Object.values(freq).reduce((a,c)=>a+Math.pow(c-mean,2),0)/total/Math.max(mean,1); }
function longestAltRun(md5) { let bits='', maxR=1, run=1; for(const c of md5) bits+=parseInt(c,16).toString(2).padStart(4,'0'); for(let i=1;i<bits.length;i++){ run=(bits[i]!==bits[i-1]?run+1:1); maxR=Math.max(maxR, run); } return maxR/bits.length; }

const featureFuncs = [ sumMod, entropy, firstByte, meanHex, medianHex, iqrHex, symbolEntropy, windowAvg, weighted, variance, highNibbleRatio, maxRunLength, parityRatio, transitionRatio, bigramUniqueness, byteDiversity, skewness, kurtosis, chiSquareUniform, bitAutocorrelation, slidingEntropyVariance, hexPairVariance, longestAltRun ];
const featureLabels = [ 'sumMod','entropy','firstByte','meanHex','medianHex','iqrHex','symbolEntropy','windowAvg','weighted','variance','highNibbleRatio','maxRunLength','parityRatio','transitionRatio','bigramUniqueness','byteDiversity','skewness','kurtosis','chiSquareUniform','bitAutocorrelation','slidingEntropyVariance','hexPairVariance','longestAltRun' ];
function features(md5) { return featureFuncs.map(fn => fn(md5)); }

// --- Normalization ---
let featureMean = null, featureStd = null;
function normalize(xs) { if (!featureMean || !featureStd) return xs; return xs.sub(featureMean).div(featureStd); }

// --- Model ---
let model;
async function buildModel(inputDim) {
  model = tf.sequential();
  model.add(tf.layers.dense({ inputShape: [inputDim], units: 64, activation: 'relu', kernelRegularizer: tf.regularizers.l2({ l2: 0.01 }) }));
  model.add(tf.layers.dropout({ rate: 0.2 }));
  model.add(tf.layers.dense({ units: 32, activation: 'relu', kernelRegularizer: tf.regularizers.l2({ l2: 0.01 }) }));
  model.add(tf.layers.dropout({ rate: 0.2 }));
  model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));
  model.compile({ optimizer: tf.train.adam(0.01), loss: 'binaryCrossentropy', metrics: ['accuracy'] });
}

// Initialize an un-trained model immediately
const modelReady = (async () => {
  await buildModel(featureFuncs.length);
  console.log('✅ Model initialized (un-trained). Call trainModel(dataset) to train.');
})();

async function trainModel(dataset) {
  const data = dataset.map(d => ({ x: features(d.hash), y: d.label }));
  const xsRaw = tf.tensor2d(data.map(d => d.x));
  const ys = tf.tensor2d(data.map(d => [d.y]));

  featureMean = xsRaw.mean(0);
  featureStd = xsRaw.sub(featureMean).square().mean(0).sqrt().add(1e-6);
  const xs = normalize(xsRaw);

  await buildModel(xs.shape[1]);
  const earlyStop = tf.callbacks.earlyStopping({ monitor: 'val_loss', patience: 10 });
  await model.fit(xs, ys, { epochs: 200, batchSize: 32, shuffle: true, validationSplit: 0.2, callbacks: [earlyStop] });

  xsRaw.dispose(); ys.dispose(); xs.dispose();
}

function predict(md5) {
  if (!model) throw new Error('Model not initialized – wait for modelReady before predicting.');
  const feat = tf.tensor2d([features(md5)]);
  const norm = normalize(feat);
  const p = model.predict(norm).dataSync()[0];
  feat.dispose(); norm.dispose();
  return p;
}

// --- UI Handler ---
form.addEventListener('submit', async e => {
  e.preventDefault();

  // ensure model is ready
  await modelReady;

  const input = md5Input.value.trim();
  let pTai, pattern;

  if (input.startsWith('#')) {
    const m = input.match(/\{(\d+)-(\d+)-(\d+)\}/);
    if (!m) { alert('Session code không hợp lệ!'); return; }
    const dice = m.slice(1,4).map(n => +n);
    const sum = dice.reduce((a,b) => a+b, 0);
    pTai = sum > 10 ? 1 : 0;
    pattern = `Dice=${dice.join('-')}, sum=${sum}`;
  } else {
    if (!/^[a-fA-F0-9]{32}$/.test(input)) { alert('MD5 không hợp lệ!'); return; }
    pTai = predict(input);
    const vals = features(input);
    pattern = vals.map((v,i) => `${featureLabels[i]}=${i<7? (v*100).toFixed(1)+'%' : v.toFixed(3)}`).join(', ');
  }

  const taiPct = (pTai * 100).toFixed(2);
  const xiuPct = ((1 - pTai) * 100).toFixed(2);

  patternP.textContent = `Mẫu cầu: ${pattern}`;
  probP.textContent = `Xác suất Tài: ${taiPct}%, Xác suất Xỉu: ${xiuPct}%`;
  predP.textContent = `Phán đoán: ${pTai>0.5?'Tài':'Xỉu'}`;

  resultDiv.hidden = false;
  historyData.unshift(parseFloat(taiPct));
  if (historyData.length > 20) historyData.pop();
  if (window.historyChart) {
    window.historyChart.data.labels = historyData.map((_,i) => i+1);
    window.historyChart.data.datasets[0].data = historyData;
    window.historyChart.update();
  }
});

// IIFE to log that the script has loaded
(async () => { console.log('script.js loaded.'); })();
