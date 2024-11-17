// Danh sách bài nhạc
const songs = [
    "music/1.mp3",
    "music/2.mp3",
    "music/3.mp3",
    "music/4.mp3",
    "music/5.mp3",
    "music/6.mp3",
    "music/7.mp3",
    "music/8.mp3",
    "music/9.mp3",
    "music/10.mp3",
    "music/11.mp3",
    "music/12.mp3",
    "music/13.mp3",
    "music/14.mp3",
    "music/15.mp3",
    "music/16.mp3",
    "music/17.mp3",
    "music/18.mp3",
    "music/19.mp3",
    "music/20.mp3",
    "music/21.mp3",
    "music/22.mp3",
    "music/23.mp3",
    "music/24.mp3",
    "music/25.mp3",
    "music/26.mp3",
    "music/27.mp3",
    "music/28.mp3",
    "music/29.mp3",
    "music/30.mp3",
    "music/31.mp3",
    "music/32.mp3",
    "music/33.mp3",
    "music/34.mp3",
    "music/35.mp3",
    "music/36.mp3",
    "music/37.mp3",
    "music/38.mp3",
    "music/39.mp3",
    "music/40.mp3",
    "music/41.mp3",
    "music/42.mp3",
    "music/43.mp3",
    "music/45.mp3",
    "music/46.mp3",
    "music/47.mp3",
    "music/48.mp3",
    "music/49.mp3",
    "music/50.mp3",
    "music/51.mp3",
    "music/52.mp3",
    "music/53.mp3",
    "music/54.mp3",
    "music/55.mp3",
    "music/56.mp3",
    "music/57.mp3"
];

// Các phần tử HTML
const playButton = document.getElementById("playButton");
const songTitle = document.getElementById("songTitle");
const audioPlayer = document.getElementById("audioPlayer");

// Canvas và ngữ cảnh
const canvas = document.getElementById("waveCanvas");
const ctx = canvas.getContext("2d");

// Kích thước canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Tạo sóng âm thanh
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
    audioPlayer.src = selectedSong;
    audioPlayer.play();
}

// Gán sự kiện cho nút
playButton.addEventListener("click", playRandomSong);
