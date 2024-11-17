// Danh sách bài nhạc và ảnh tương ứng
const songs = [
    { src: "music/1.mp3", image: "https://i.pinimg.com/736x/79/ce/fa/79cefa3a330c833ada88ebc5b8e6b9b2.jpg" },
    { src: "music/2.mp3", image: "https://i.pinimg.com/736x/90/d8/b7/90d8b7361356af5ed9b726db89dcd0ce.jpg" },
    { src: "music/3.mp3", image: "https://i.pinimg.com/736x/f0/b9/4a/f0b94a4a7b6caa4648b9e4703e0911a8.jpg" },
    { src: "music/4.mp3", image: "https://i.pinimg.com/736x/97/31/3a/97313a30e351a86f099fa636ca9a4685.jpg" },
    { src: "music/5.mp3", image: "https://i.pinimg.com/736x/48/b2/da/48b2da40f198658dd9ccc311a4bd6a8c.jpg" },
    { src: "music/6.mp3", image: "https://i.pinimg.com/474x/e6/a0/63/e6a063b65ee81d177318f5bd69b2b278.jpg" },
    { src: "music/7.mp3", image: "https://i.pinimg.com/474x/49/dc/1d/49dc1d657112d8b23eb4fda87bdd8cfe.jpg" },
    { src: "music/8.mp3", image: "https://i.pinimg.com/236x/b6/2d/bf/b62dbfedf738d52c6dddd262e1f02751.jpg" },
    { src: "music/9.mp3", image: "https://i.pinimg.com/236x/d2/98/bb/d298bb7e9aa3228ad73c30c0b86da0ae.jpg" },
    { src: "music/10.mp3", image: "https://i.pinimg.com/236x/89/d7/9d/89d79d342a284d3b13033da7e197a31e.jpg" },
    { src: "music/11.mp3", image: "https://i.pinimg.com/236x/56/d8/97/56d897b2111421c942be05bcd55ffac4.jpg" },
    { src: "music/12.mp3", image: "https://i.pinimg.com/236x/2d/70/34/2d703462fcadb5c8ee1c219372c0d0fb.jpg" },
    { src: "music/13.mp3", image: "https://i.pinimg.com/474x/c0/19/a7/c019a76c1677ffc989f6c1d8c503fe0e.jpg" },
    { src: "music/14.mp3", image: "https://i.pinimg.com/736x/77/df/03/77df03b5be1d14c9335cedb6e01c116b.jpg" },
    { src: "music/15.mp3", image: "https://i.pinimg.com/474x/2e/0a/69/2e0a69997dec782e80b42b84e86297a4.jpg" },
    { src: "music/16.mp3", image: "https://i.pinimg.com/236x/cd/97/cc/cd97cc57cdc317df681b4cbf9d9d14cb.jpg" },
    { src: "music/17.mp3", image: "https://i.pinimg.com/236x/98/c7/04/98c7042ec11ebc0e0dd6e62769949109.jpg" },
    { src: "music/18.mp3", image: "https://i.pinimg.com/236x/75/17/f4/7517f41be7e543160c85660bdf585c65.jpg" },
    { src: "music/19.mp3", image: "https://i.pinimg.com/236x/e0/96/cf/e096cf5b9acd2b45a5c5d13a79b9bbbf.jpg" },
    { src: "music/20.mp3", image: "https://i.pinimg.com/236x/38/2d/a3/382da3d2eec0246c947927a5c5dcf828.jpg" },
    { src: "music/21.mp3", image: "https://i.pinimg.com/236x/5f/45/79/5f4579526f4391c230d2dbc4c5ab91c7.jpg" },
    { src: "music/22.mp3", image: "https://i.pinimg.com/236x/c7/3d/7f/c73d7fdfee9c085412e751bbe855c050.jpg" },
    { src: "music/23.mp3", image: "https://i.pinimg.com/236x/e0/33/97/e03397c3e09ed5ca30bb0894c2337245.jpg" },
    { src: "music/24.mp3", image: "https://i.pinimg.com/236x/8f/15/04/8f1504db6ccf5479efa335e2147e522c.jpg" },
    { src: "music/25.mp3", image: "https://i.pinimg.com/474x/64/4b/5d/644b5d581a4fb29e91523c1318f9e32c.jpg" },
    { src: "music/26.mp3", image: "https://i.pinimg.com/474x/4c/0c/c5/4c0cc5ffc23b1a6329d4e3f5d803c006.jpg" },
    { src: "music/27.mp3", image: "https://i.pinimg.com/236x/2d/ea/3a/2dea3ac5568915e269eaa9568c11926f.jpg" },
    { src: "music/28.mp3", image: "https://i.pinimg.com/474x/f3/66/a4/f366a43ff04edd07fa5f91cc04ea576b.jpg" },
    { src: "music/29.mp3", image: "https://i.pinimg.com/236x/59/92/2e/59922e1cd17605ad09ef4b90580c5d66.jpg" },
    { src: "music/30.mp3", image: "https://i.pinimg.com/474x/67/cd/d8/67cdd84546bd0b763c2a0ea7da3c48ef.jpg" },
    { src: "music/31.mp3", image: "https://i.pinimg.com/236x/8f/e6/2e/8fe62e8940c26e4eb5559ad7034b9d06.jpg" },
    { src: "music/32.mp3", image: "https://i.pinimg.com/474x/18/34/1c/18341c372e0e19a256123b6519c5eb1a.jpg" },
    { src: "music/33.mp3", image: "https://i.pinimg.com/236x/ab/74/06/ab7406cb7f396e0866a45db00af7d624.jpg" },
    { src: "music/34.mp3", image: "https://i.pinimg.com/236x/2c/45/f7/2c45f7ffdfb9b3bf94be58148315cead.jpg" },
    { src: "music/35.mp3", image: "https://i.pinimg.com/236x/31/3c/9e/313c9ee2233e3aab36a0c0ab9393f5b9.jpg" },
    { src: "music/36.mp3", image: "https://i.pinimg.com/236x/9c/70/b9/9c70b925624763a4b9ed23fdd0e8a0a6.jpg" },
    { src: "music/37.mp3", image: "https://i.pinimg.com/236x/b4/8c/fd/b48cfd5f84af8fb4f79ec4f0e4e5495e.jpg" },
    { src: "music/38.mp3", image: "https://i.pinimg.com/236x/f7/ab/ae/f7abae97b56e8942383999eef3d7eb29.jpg" },
    { src: "music/39.mp3", image: "https://i.pinimg.com/474x/48/91/94/489194a8647770b6d2e522424f66bc80.jpg" },
    { src: "music/40.mp3", image: "https://i.pinimg.com/236x/73/6a/0e/736a0e102da6d5e5afef0944e00c62f9.jpg" },
    { src: "music/41.mp3", image: "https://i.pinimg.com/236x/d6/80/3e/d6803e4cece581ab57aee8317f4ab47f.jpg" },
    { src: "music/42.mp3", image: "https://i.pinimg.com/236x/3c/bb/1b/3cbb1bcc30e004cb9a19683afdb17d8c.jpg" },
    { src: "music/43.mp3", image: "https://i.pinimg.com/236x/ff/a0/0b/ffa00ba82944ea775f66a614d045834a.jpg" },
    { src: "music/44.mp3", image: "https://i.pinimg.com/236x/5e/9d/ea/5e9deaa039eb8fbbc8a8be06eb07478b.jpg" },
    { src: "music/45.mp3", image: "https://i.pinimg.com/236x/3e/a0/9c/3ea09c41176acc082099fadcfe0d0650.jpg" },
    { src: "music/46.mp3", image: "https://i.pinimg.com/236x/2f/b2/c4/2fb2c4bec0fd90d0abe57c9c022c26c9.jpg" },
    { src: "music/47.mp3", image: "https://i.pinimg.com/236x/f6/41/ad/f641ad1f03bac434431a6d4f0ffce9d5.jpg" },
    { src: "music/48.mp3", image: "https://i.pinimg.com/236x/33/45/e2/3345e25f3264803a18030eb8b22b6109.jpg" },
    { src: "music/49.mp3", image: "https://i.pinimg.com/474x/ce/bc/90/cebc9015e0570fc15407dbbf406e0a7d.jpg" },
    { src: "music/50.mp3", image: "https://i.pinimg.com/236x/ea/74/74/ea7474713f5aa4849b927bcd38b2b231.jpg" },
    { src: "music/51.mp3", image: "https://i.pinimg.com/236x/3a/f2/94/3af294b0bdbfd3371fbf4dc9c7616cea.jpg" },
    { src: "music/52.mp3", image: "https://i.pinimg.com/236x/23/45/99/234599f7ce757dcfbabf12f525ea969e.jpg" },
    { src: "music/53.mp3", image: "https://i.pinimg.com/236x/e6/6c/15/e66c158fe4fea36836262e8a101fb6f1.jpg" },
    { src: "music/54.mp3", image: "https://i.pinimg.com/236x/29/43/07/294307032a4fa5894bb64b97dcf94755.jpg" },
    { src: "music/55.mp3", image: "https://i.pinimg.com/236x/d9/ce/c1/d9cec1d5ccc81225c27c37a371c09521.jpg" },
    { src: "music/56.mp3", image: "https://i.pinimg.com/236x/bb/55/04/bb55049e34a47845add5253c9b85f1bb.jpg" },
    { src: "music/57.mp3", image: "https://i.pinimg.com/474x/82/50/3a/82503aaeee413929ada0e92ded5f18e8.jpg" },
    { src: "music/58.mp3", image: "https://i.pinimg.com/474x/3c/a5/9c/3ca59c87b2d1d4afcf0d27c4683d94b5.jpg" },
    { src: "music/59.mp3", image: "https://i.pinimg.com/236x/7b/11/fd/7b11fdb62a0e4ab598aa5cb96c9026c9.jpg" },
    { src: "music/60.mp3", image: "https://i.pinimg.com/474x/8d/eb/f8/8debf858206842da23fd31574416428e.jpg" },
    { src: "music/61.mp3", image: "https://i.pinimg.com/236x/0e/ca/8b/0eca8b61ff85eba45e102ed5ca48385d.jpg" },
    { src: "music/62.mp3", image: "https://i.pinimg.com/236x/90/b3/1a/90b31a45447f556306ca8cbf853054f1.jpg" },
    { src: "music/63.mp3", image: "https://i.pinimg.com/236x/ef/b9/22/efb922cc0678c546eaa375d60d51bcb7.jpg" },
    { src: "music/64.mp3", image: "https://i.pinimg.com/236x/cf/0f/21/cf0f21e4a44f17467660e04c5a6aad5e.jpg" },
    { src: "music/65.mp3", image: "https://i.pinimg.com/474x/bb/cc/08/bbcc08af5806d982bab5c20537575714.jpg" },
    { src: "music/66.mp3", image: "https://i.pinimg.com/736x/ef/38/ba/ef38ba33c09582459d86548f8e9a3f49.jpg" },
    { src: "music/67.mp3", image: "https://i.pinimg.com/474x/62/a5/e4/62a5e4451b32f1d9ace7c319d419cbea.jpg" }

    // Thêm các bài nhạc và ảnh tương ứng ở đây
];

// Các phần tử HTML
const playButton = document.getElementById("playButton");
const songImage = document.getElementById("songImage");

// Tạo đối tượng âm thanh toàn cục
let audio = new Audio();

// Kích thước canvas và sóng âm thanh
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

// Hàm phát bài ngẫu nhiên
function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    const selectedSong = songs[randomIndex];
    audio.src = selectedSong.src;
    songImage.src = selectedSong.image;
    audio.play();
}

// Khi bài nhạc kết thúc, phát bài mới
audio.addEventListener("ended", playRandomSong);

// Gán sự kiện cho nút
playButton.addEventListener("click", playRandomSong);

// Tự động phát nhạc khi tải trang
window.addEventListener("load", () => {
    // Tương thích với trình duyệt yêu cầu tương tác trước khi phát âm thanh
    const playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                playRandomSong(); // Phát bài ngẫu nhiên
            })
            .catch(() => {
                console.log("Phát nhạc tự động bị chặn. Nhấn nút để bắt đầu!");
            });
    }
});
