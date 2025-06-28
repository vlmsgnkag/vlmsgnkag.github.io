// Danh sách bài nhạc và ảnh tương ứng
const songs = [
    { src: "music/59.mp3", image: "https://i.pinimg.com/236x/7b/11/fd/7b11fdb62a0e4ab598aa5cb96c9026c9.jpg" },
    { src: "music/100.mp3", image: "https://i.pinimg.com/474x/93/14/c1/9314c1fe0d89328cefd0fa1b6d1c7bf6.jpg" },
    { src: "music/33.mp3", image: "https://i.pinimg.com/236x/ab/74/06/ab7406cb7f396e0866a45db00af7d624.jpg" },
    { src: "music/66.mp3", image: "https://i.pinimg.com/736x/ef/38/ba/ef38ba33c09582459d86548f8e9a3f49.jpg" },
    { src: "music/35.mp3", image: "https://i.pinimg.com/236x/31/3c/9e/313c9ee2233e3aab36a0c0ab9393f5b9.jpg" },
    { src: "music/51.mp3", image: "https://i.pinimg.com/236x/3a/f2/94/3af294b0bdbfd3371fbf4dc9c7616cea.jpg" },
    { src: "music/87.mp3", image: "https://i.pinimg.com/236x/62/d5/e7/62d5e7673f1ce5043bd266f6dbba99c8.jpg" },
    { src: "music/21.mp3", image: "https://i.pinimg.com/236x/5f/45/79/5f4579526f4391c230d2dbc4c5ab91c7.jpg" },
    { src: "music/4.mp3", image: "https://i.pinimg.com/736x/97/31/3a/97313a30e351a86f099fa636ca9a4685.jpg" },
    { src: "music/82.mp3", image: "https://i.pinimg.com/236x/5b/b1/b3/5bb1b33c6cd7654274cb3df2997405d4.jpg" },
    { src: "music/52.mp3", image: "https://i.pinimg.com/236x/23/45/99/234599f7ce757dcfbabf12f525ea969e.jpg" },
    { src: "music/93.mp3", image: "https://i.pinimg.com/474x/39/02/e7/3902e7a3e2e57df9dc5e254e41cde03d.jpg" },
    { src: "music/46.mp3", image: "https://i.pinimg.com/236x/2f/b2/c4/2fb2c4bec0fd90d0abe57c9c022c26c9.jpg" },
    { src: "music/104.mp3", image: "https://i.pinimg.com/736x/73/ef/c3/73efc363be837db7b71ab779d87e4dcd.jpg" },
    { src: "music/15.mp3", image: "https://i.pinimg.com/474x/2e/0a/69/2e0a69997dec782e80b42b84e86297a4.jpg" },
    { src: "music/75.mp3", image: "https://i.pinimg.com/236x/82/05/f4/8205f41df2398d0faf622078fe5ec529.jpg" },
    { src: "music/26.mp3", image: "https://i.pinimg.com/474x/4c/0c/c5/4c0cc5ffc23b1a6329d4e3f5d803c006.jpg" },
    { src: "music/85.mp3", image: "https://i.pinimg.com/236x/b7/4e/42/b74e4217662842979353832a66ef2cbd.jpg" },
    { src: "music/9.mp3", image: "https://i.pinimg.com/236x/d2/98/bb/d298bb7e9aa3228ad73c30c0b86da0ae.jpg" },
    { src: "music/38.mp3", image: "https://i.pinimg.com/236x/f7/ab/ae/f7abae97b56e8942383999eef3d7eb29.jpg" },
    { src: "music/29.mp3", image: "https://i.pinimg.com/236x/59/92/2e/59922e1cd17605ad09ef4b90580c5d66.jpg" },
    { src: "music/28.mp3", image: "https://i.pinimg.com/474x/f3/66/a4/f366a43ff04edd07fa5f91cc04ea576b.jpg" },
    { src: "music/37.mp3", image: "https://i.pinimg.com/236x/b4/8c/fd/b48cfd5f84af8fb4f79ec4f0e4e5495e.jpg" },
    { src: "music/20.mp3", image: "https://i.pinimg.com/236x/38/2d/a3/382da3d2eec0246c947927a5c5dcf828.jpg" },
    { src: "music/22.mp3", image: "https://i.pinimg.com/236x/c7/3d/7f/c73d7fdfee9c085412e751bbe855c050.jpg" },
    { src: "music/83.mp3", image: "https://i.pinimg.com/236x/5a/4d/17/5a4d171c129423b0e16c68cfd68517a1.jpg" },
    { src: "music/95.mp3", image: "https://i.pinimg.com/474x/bb/ab/f1/bbabf1415f81b7f3e201e43b219232ac.jpg" },
    { src: "music/89.mp3", image: "https://i.pinimg.com/474x/e7/dc/77/e7dc7786be4b2faad53e5b40344d7eef.jpg" },
    { src: "music/24.mp3", image: "https://i.pinimg.com/236x/8f/15/04/8f1504db6ccf5479efa335e2147e522c.jpg" },
    { src: "music/61.mp3", image: "https://i.pinimg.com/236x/0e/ca/8b/0eca8b61ff85eba45e102ed5ca48385d.jpg" },
    { src: "music/31.mp3", image: "https://i.pinimg.com/236x/8f/e6/2e/8fe62e8940c26e4eb5559ad7034b9d06.jpg" },
    { src: "music/65.mp3", image: "https://i.pinimg.com/474x/bb/cc/08/bbcc08af5806d982bab5c20537575714.jpg" },
    { src: "music/62.mp3", image: "https://i.pinimg.com/236x/90/b3/1a/90b31a45447f556306ca8cbf853054f1.jpg" },
    { src: "music/18.mp3", image: "https://i.pinimg.com/236x/75/17/f4/7517f41be7e543160c85660bdf585c65.jpg" },
    { src: "music/49.mp3", image: "https://i.pinimg.com/474x/ce/bc/90/cebc9015e0570fc15407dbbf406e0a7d.jpg" },
    { src: "music/64.mp3", image: "https://i.pinimg.com/236x/cf/0f/21/cf0f21e4a44f17467660e04c5a6aad5e.jpg" },
    { src: "music/53.mp3", image: "https://i.pinimg.com/236x/e6/6c/15/e66c158fe4fea36836262e8a101fb6f1.jpg" },
    { src: "music/11.mp3", image: "https://i.pinimg.com/236x/56/d8/97/56d897b2111421c942be05bcd55ffac4.jpg" },
    { src: "music/81.mp3", image: "https://i.pinimg.com/236x/df/f0/e9/dff0e950ba846a39ba0ae4fb1fff044f.jpg" },
    { src: "music/97.mp3", image: "https://i.pinimg.com/736x/1c/26/34/1c263496654b4f2c570e4fbf6eba9761.jpg" },
    { src: "music/68.mp3", image: "https://i.pinimg.com/236x/88/d4/c5/88d4c5b69abfe38ebfbe39ed8fcb3364.jpg" },
    { src: "music/32.mp3", image: "https://i.pinimg.com/474x/18/34/1c/18341c372e0e19a256123b6519c5eb1a.jpg" },
    { src: "music/78.mp3", image: "https://i.pinimg.com/236x/49/86/72/4986722358f267b00429e2f049c1d811.jpg" },
    { src: "music/23.mp3", image: "https://i.pinimg.com/236x/e0/33/97/e03397c3e09ed5ca30bb0894c2337245.jpg" },
    { src: "music/47.mp3", image: "https://i.pinimg.com/236x/f6/41/ad/f641ad1f03bac434431a6d4f0ffce9d5.jpg" },
    { src: "music/5.mp3", image: "https://i.pinimg.com/736x/48/b2/da/48b2da40f198658dd9ccc311a4bd6a8c.jpg" },
    { src: "music/1.mp3", image: "https://i.pinimg.com/736x/79/ce/fa/79cefa3a330c833ada88ebc5b8e6b9b2.jpg" },
    { src: "music/39.mp3", image: "https://i.pinimg.com/474x/48/91/94/489194a8647770b6d2e522424f66bc80.jpg" },
    { src: "music/73.mp3", image: "https://i.pinimg.com/236x/01/3c/11/013c11d9fb23f12602bd7d9974aab53d.jpg" },
    { src: "music/30.mp3", image: "https://i.pinimg.com/474x/67/cd/d8/67cdd84546bd0b763c2a0ea7da3c48ef.jpg" },
    { src: "music/45.mp3", image: "https://i.pinimg.com/236x/3e/a0/9c/3ea09c41176acc082099fadcfe0d0650.jpg" },
    { src: "music/16.mp3", image: "https://i.pinimg.com/236x/cd/97/cc/cd97cc57cdc317df681b4cbf9d9d14cb.jpg" },
    { src: "music/14.mp3", image: "https://i.pinimg.com/736x/77/df/03/77df03b5be1d14c9335cedb6e01c116b.jpg" },
    { src: "music/8.mp3", image: "https://i.pinimg.com/236x/b6/2d/bf/b62dbfedf738d52c6dddd262e1f02751.jpg" },
    { src: "music/3.mp3", image: "https://i.pinimg.com/736x/f0/b9/4a/f0b94a4a7b6caa4648b9e4703e0911a8.jpg" },
    { src: "music/71.mp3", image: "https://i.pinimg.com/236x/11/6d/99/116d99c44902e7003a1f6731cb93d99d.jpg" },
    { src: "music/77.mp3", image: "https://i.pinimg.com/236x/60/16/ed/6016ede8877e0eb31f17b1f9aa15cbe2.jpg" },
    { src: "music/76.mp3", image: "https://i.pinimg.com/236x/90/22/2b/90222b6677e3ae1825c2d7db88dec75a.jpg" },
    { src: "music/7.mp3", image: "https://i.pinimg.com/474x/49/dc/1d/49dc1d657112d8b23eb4fda87bdd8cfe.jpg" },
    { src: "music/63.mp3", image: "https://i.pinimg.com/236x/ef/b9/22/efb922cc0678c546eaa375d60d51bcb7.jpg" },
    { src: "music/98.mp3", image: "https://i.pinimg.com/474x/b4/2f/c9/b42fc94ccd8b4ed2476c7263dc4eb4c5.jpg" },
    { src: "music/79.mp3", image: "https://i.pinimg.com/236x/8d/d4/c0/8dd4c0fa591d3b642541c39ba60692fc.jpg" },
    { src: "music/2.mp3", image: "https://i.pinimg.com/736x/90/d8/b7/90d8b7361356af5ed9b726db89dcd0ce.jpg" },
    { src: "music/92.mp3", image: "https://i.pinimg.com/236x/d2/19/1c/d2191c1bcf8c50f2ba43e70380998c82.jpg" },
    { src: "music/40.mp3", image: "https://i.pinimg.com/236x/73/6a/0e/736a0e102da6d5e5afef0944e00c62f9.jpg" },
    { src: "music/55.mp3", image: "https://i.pinimg.com/236x/d9/ce/c1/d9cec1d5ccc81225c27c37a371c09521.jpg" },
    { src: "music/70.mp3", image: "https://i.pinimg.com/474x/b7/4e/cc/b74eccabad6d13e3e716ce226fb3295f.jpg" },
    { src: "music/102.mp3", image: "https://i.pinimg.com/474x/8c/7d/81/8c7d81764c649d1407a62591b08667cd.jpg" },
    { src: "music/74.mp3", image: "https://i.pinimg.com/236x/60/75/ad/6075ad700bd16ea3fb7b26b979ee8081.jpg" },
    { src: "music/67.mp3", image: "https://i.pinimg.com/474x/62/a5/e4/62a5e4451b32f1d9ace7c319d419cbea.jpg" },
    { src: "music/36.mp3", image: "https://i.pinimg.com/236x/9c/70/b9/9c70b925624763a4b9ed23fdd0e8a0a6.jpg" },
    { src: "music/88.mp3", image: "https://i.pinimg.com/236x/96/1b/10/961b10c845a1772cf4a0e00b1d5a35dd.jpg" },
    { src: "music/12.mp3", image: "https://i.pinimg.com/236x/2d/70/34/2d703462fcadb5c8ee1c219372c0d0fb.jpg" },
    { src: "music/50.mp3", image: "https://i.pinimg.com/236x/ea/74/74/ea7474713f5aa4849b927bcd38b2b231.jpg" },
    { src: "music/60.mp3", image: "https://i.pinimg.com/474x/8d/eb/f8/8debf858206842da23fd31574416428e.jpg" },
    { src: "music/48.mp3", image: "https://i.pinimg.com/236x/33/45/e2/3345e25f3264803a18030eb8b22b6109.jpg" },
    { src: "music/19.mp3", image: "https://i.pinimg.com/236x/e0/96/cf/e096cf5b9acd2b45a5c5d13a79b9bbbf.jpg" },
    { src: "music/42.mp3", image: "https://i.pinimg.com/236x/3c/bb/1b/3cbb1bcc30e004cb9a19683afdb17d8c.jpg" },
    { src: "music/96.mp3", image: "https://i.pinimg.com/474x/c5/87/fc/c587fca11c5a2129a33d0f5705a9ad95.jpg" },
    { src: "music/10.mp3", image: "https://i.pinimg.com/236x/89/d7/9d/89d79d342a284d3b13033da7e197a31e.jpg" },
    { src: "music/94.mp3", image: "https://i.pinimg.com/474x/cb/44/4e/cb444e2ff7fbf9b1f6c6653f9b5550a9.jpg" },
    { src: "music/56.mp3", image: "https://i.pinimg.com/236x/bb/55/04/bb55049e34a47845add5253c9b85f1bb.jpg" },
    { src: "music/43.mp3", image: "https://i.pinimg.com/236x/ff/a0/0b/ffa00ba82944ea775f66a614d045834a.jpg" },
    { src: "music/6.mp3", image: "https://i.pinimg.com/474x/e6/a0/63/e6a063b65ee81d177318f5bd69b2b278.jpg" },
    { src: "music/103.mp3", image: "https://i.pinimg.com/474x/81/ce/80/81ce80978295427fd33d87ebff4e3388.jpg" },
    { src: "music/57.mp3", image: "https://i.pinimg.com/474x/82/50/3a/82503aaeee413929ada0e92ded5f18e8.jpg" },
    { src: "music/99.mp3", image: "https://i.pinimg.com/474x/47/ce/05/47ce05e9985aea3a51557aff72025577.jpg" },
    { src: "music/86.mp3", image: "https://i.pinimg.com/474x/94/a0/20/94a0202574cb35a0319cade119be52e1.jpg" },
    { src: "music/54.mp3", image: "https://i.pinimg.com/236x/29/43/07/294307032a4fa5894bb64b97dcf94755.jpg" },
    { src: "music/72.mp3", image: "https://i.pinimg.com/236x/40/9b/e4/409be4d747572a4680ba890faf30df30.jpg" },
    { src: "music/80.mp3", image: "https://i.pinimg.com/236x/d4/b9/1d/d4b91dba1f6fd3aac6237170ce9b614e.jpg" },
    { src: "music/27.mp3", image: "https://i.pinimg.com/236x/2d/ea/3a/2dea3ac5568915e269eaa9568c11926f.jpg" },
    { src: "music/90.mp3", image: "https://i.pinimg.com/236x/0a/2b/89/0a2b89b4726f9e1c62e9440856fe3ee5.jpg" },
    { src: "music/13.mp3", image: "https://i.pinimg.com/474x/c0/19/a7/c019a76c1677ffc989f6c1d8c503fe0e.jpg" },
    { src: "music/58.mp3", image: "https://i.pinimg.com/474x/3c/a5/9c/3ca59c87b2d1d4afcf0d27c4683d94b5.jpg" },
    { src: "music/91.mp3", image: "https://i.pinimg.com/236x/ae/33/28/ae3328e1e373e36f60a3cbce66359477.jpg" },
    { src: "music/44.mp3", image: "https://i.pinimg.com/236x/5e/9d/ea/5e9deaa039eb8fbbc8a8be06eb07478b.jpg" },
    { src: "music/17.mp3", image: "https://i.pinimg.com/236x/98/c7/04/98c7042ec11ebc0e0dd6e62769949109.jpg" },
    { src: "music/84.mp3", image: "https://i.pinimg.com/236x/c2/a7/44/c2a744ecbb75f2c4ee3aa3681866fda4.jpg" },
    { src: "music/41.mp3", image: "https://i.pinimg.com/236x/d6/80/3e/d6803e4cece581ab57aee8317f4ab47f.jpg" },
    { src: "music/69.mp3", image: "https://i.pinimg.com/236x/53/6f/59/536f5939a0d33b9b364eff921e46b9a2.jpg" },
    { src: "music/101.mp3", image: "https://i.pinimg.com/736x/13/d3/c7/13d3c7f925a21adc7a82d4ebd466a6f7.jpg" },
    { src: "music/34.mp3", image: "https://i.pinimg.com/236x/2c/45/f7/2c45f7ffdfb9b3bf94be58148315cead.jpg" },
    { src: "music/25.mp3", image: "https://i.pinimg.com/474x/64/4b/5d/644b5d581a4fb29e91523c1318f9e32c.jpg" }
        
        
    
    
        // Thêm các bài nhạc và ảnh tương ứng ở đây
    ];
    
    // Lấy các đối tượng HTML cần thiết
// Lấy các đối tượng HTML cần thiết
// Lấy các đối tượng HTML cần thiết
const playButton = document.getElementById("playButton");
const songImage = document.getElementById("songImage");
const songInfo = document.getElementById("songInfo");
const currentTimeDisplay = document.getElementById("currentTime");
const durationTimeDisplay = document.getElementById("durationTime");
const downloadButton = document.getElementById("downloadButton");
const progressBar = document.getElementById("progress");

// Tạo đối tượng âm thanh toàn cục
let audio = new Audio();

// Thiết lập canvas và vẽ hiệu ứng sóng
const canvas = document.getElementById("waveCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let wave = {
    y: canvas.height / 2,
    length: 0.01,
    amplitude: 100,
    frequency: 0.02
};
let increment = wave.frequency;

function drawWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    for (let i = 0; i < canvas.width; i++) {
        ctx.lineTo(
            i,
            wave.y + Math.sin(i * wave.length + increment) * wave.amplitude
        );
    }
    ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
    ctx.lineWidth = 2;
    ctx.stroke();
    increment += wave.frequency;
    requestAnimationFrame(drawWave);
}
drawWave();

// Danh sách bài hát chưa phát
let unplayedSongs = [...songs];

// Hàm format thời gian từ giây sang định dạng mm:ss
function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
}

// Cập nhật thời gian bài hát
function updateTime() {
    if (!isNaN(audio.duration)) {
        currentTimeDisplay.innerText = formatTime(audio.currentTime);
        durationTimeDisplay.innerText = formatTime(audio.duration);
        let progressPercent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }
}
audio.addEventListener("timeupdate", updateTime);
audio.addEventListener("loadedmetadata", updateTime);

// Hàm phát bài ngẫu nhiên và cập nhật giao diện
function playRandomSong() {
    if (unplayedSongs.length === 0) {
        // Làm mới danh sách khi đã phát hết tất cả bài hát
        unplayedSongs = [...songs];
    }
    const randomIndex = Math.floor(Math.random() * unplayedSongs.length);
    const selectedSong = unplayedSongs.splice(randomIndex, 1)[0];

    // Cập nhật nguồn bài hát, ảnh và link tải xuống
    audio.src = selectedSong.src;
    songImage.src = selectedSong.image;
    downloadButton.href = selectedSong.src;

    audio.play();

    // Tính vị trí bài hát hiện tại dựa trên mảng gốc
    const currentIndex = songs.indexOf(selectedSong) + 1;
    songInfo.innerText = `Đang phát bài: ${currentIndex} / ${songs.length}`;
}

// Khi bài nhạc kết thúc, tự động phát bài mới
audio.addEventListener("ended", playRandomSong);

// Gán sự kiện cho nút Play Song
playButton.addEventListener("click", playRandomSong);

// Tự động phát nhạc khi tải trang (nếu được trình duyệt cho phép)
window.addEventListener("load", () => {
    const playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                playRandomSong();
            })
            .catch(() => {
                console.log("Phát nhạc tự động bị chặn. Nhấn nút để bắt đầu!");
            });
    }
});
