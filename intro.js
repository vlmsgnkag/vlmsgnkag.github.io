document.addEventListener("DOMContentLoaded", function () {
    const MAX_FLOWERS = 15; // Số lượng hoa tối đa cùng lúc
    const createFlower = () => {
        const currentFlowers = document.querySelectorAll(".flower");
        if (currentFlowers.length >= MAX_FLOWERS) return;
        const flower = document.createElement("div");
        const isMai = Math.random() > 0.5; // Ngẫu nhiên chọn hoa mai hoặc hoa đào

        flower.classList.add("flower");
        flower.style.left = `${Math.random() * 100}vw`; // Vị trí ngang ngẫu nhiên
        flower.style.animationDuration = `${Math.random() * 5 + 10}s`; // Thời gian rơi từ 10-15 giây
        flower.style.animationDelay = `${Math.random() * 5}s`; // Thời gian chờ ngẫu nhiên
        flower.style.backgroundImage = isMai
            ? "url('image/big-flower1.png')" // Đường dẫn tới ảnh hoa mai
            : "url('image/big-flower.png')"; // Đường dẫn tới ảnh hoa đào

            document.body.appendChild(flower);

        // Xóa hoa khi kết thúc
        flower.addEventListener("animationend", () => {
            flower.remove();
        });
    };

    // Tạo hoa rơi mỗi 500ms
    setInterval(createFlower, 500);
});   
    // Hàm kích hoạt pháo hoa
    function triggerFireworks() {
        const canvas = document.createElement("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);
        const ctx = canvas.getContext("2d");

        // Tạo pháo hoa
        function createFireworks(x, y) {
            const colors = ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#9400d3"];
            const particles = [];
            for (let i = 0; i < 200; i++) { // Tăng số lượng hạt để pháo hoa dày đặc hơn
                particles.push({
                    x: x,
                    y: y,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    radius: Math.random() * 3 + 1,
                    speedX: Math.random() * 6 - 3, // Tăng tốc độ chuyển động
                    speedY: Math.random() * 6 - 3, // Tăng tốc độ chuyển động
                    alpha: 1
                });
            }

            // Vẽ pháo hoa
            function drawFireworks() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                particles.forEach((particle, index) => {
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${hexToRgb(particle.color)}, ${particle.alpha})`;
                    ctx.fill();

                    particle.x += particle.speedX;
                    particle.y += particle.speedY;
                    particle.alpha -= 0.02;

                    // Tạo hiệu ứng sáng và sắc nét cho pháo hoa
                    if (particle.alpha > 0.7) {
                        ctx.shadowBlur = 20;
                        ctx.shadowColor = particle.color; // Ánh sáng xung quanh hạt pháo
                    } else {
                        ctx.shadowBlur = 0;
                    }

                    if (particle.alpha <= 0) {
                        particles.splice(index, 1);
                    }
                });

                if (particles.length > 0) {
                    requestAnimationFrame(drawFireworks);
                } else {
                    canvas.remove(); // Xóa canvas khi pháo hoa kết thúc
                }
            }

            drawFireworks();
        }

        // Tạo pháo hoa ngẫu nhiên trên canvas
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        createFireworks(x, y);
    }
    // Hiển thị "Chúc Mừng Năm Mới" ở trung tâm
    function showMessageCenter() {
        const messageBox = document.createElement("div");
        messageBox.id = "messageBox"; // Gán id để dễ dàng áp dụng CSS
        messageBox.innerHTML = `<h1>🎉 Chúc Mừng Năm Mới 🎉</h1>`;
        
        document.body.appendChild(messageBox);

        // Thêm hiệu ứng phát sáng cho chữ
        setTimeout(() => {
            messageBox.style.textShadow = "0px 0px 25px rgba(255, 204, 0, 1), 0 0 50px rgba(255, 204, 0, 0.8)";
        }, 500);
    }
    // Hàm chuyển đổi màu sắc HEX sang RGB
    function hexToRgb(hex) {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `${r}, ${g}, ${b}`;
    }
    function updateCountdown() {
        const now = new Date();

        // Cập nhật ngày mục tiêu cho countdown (năm sau)
        const targetDate = new Date(now.getFullYear() + 1, 0, 1); // Ngày đầu năm mới của năm sau


        const timeDiff = targetDate - now;

        // Tính toán thời gian còn lại
        if (timeDiff <= 0) {
            document.getElementById('countdown').innerHTML = "Chúc Mừng Năm Mới!";
            triggerFireworks(); // Kích hoạt pháo hoa khi countdown kết thúc
            showMessageCenter(); // Hiển thị chữ "Chúc Mừng Năm Mới" ở trung tâm
            return;
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        // Hiển thị countdown
        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }

    // Gọi hàm countdown mỗi giây
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Chạy ngay lập tức khi tải trang
    // Kích hoạt pháo hoa khi countdown kết thúc
document.addEventListener("DOMContentLoaded", function () {
    const messages = [
        "Chúc bạn một năm mới sức khỏe dồi dào, vạn sự như ý!",
        "Xuân sang, chúc bạn và gia đình an khang thịnh vượng!",
        "Năm mới hạnh phúc, thành công và tràn ngập niềm vui!",
        "Chúc bạn mọi điều tốt đẹp, may mắn và phát tài phát lộc!",
        "Năm mới, chúc bạn vạn sự bình an, gia đình hòa thuận!",
        "Chúc mừng năm mới! Hãy đón chào những điều tuyệt vời nhất!",
        "Tết đến xuân về, chúc bạn tràn đầy sức sống, làm ăn phát đạt!",
        "Chúc bạn luôn vui vẻ, tình yêu đong đầy, sự nghiệp thăng hoa!",
        "Xuân về, chúc nhà nhà sung túc, phú quý an vui!",
        "Mong năm mới là khởi đầu của những thành công rực rỡ!"
    ];
    // Random lời chúc
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Tạo bảng thông báo
    const messageBox = document.createElement("div");
    messageBox.classList.add("new-year-message");
    messageBox.innerHTML = `
        <div class="message-border">
            <h1>Chúc Mừng Năm Mới</h1>
            <p>${randomMessage}</p>
            <button class="close-button">Đóng</button>
        </div>
    `;

    document.body.appendChild(messageBox);

    // Thêm sự kiện đóng bảng
    const closeButton = messageBox.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
        messageBox.remove();
    });
});
// ------audio------------
// Danh sách bài hát
const songs = [
    { file: "nhac.mp3"},
    { file: "nhac2.mp3"},
    { file: "nhac3.mp3"},
    { file: "nhac4.mp3"}
];
// Hàm random bài hát
function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length); // Lấy ngẫu nhiên chỉ số bài hát
    const selectedSong = songs[randomIndex]; // Lấy bài hát ngẫu nhiên

    // Gán bài hát vào audio player
    const audioPlayer = document.getElementById("audioPlayer");
    
    audioPlayer.src = `image/${selectedSong.file}`; // Đường dẫn tới thư mục chứa nhạc
    audioPlayer.play(); // Phát nhạc tự động
}
canvas.width = Math.min(window.innerWidth, 768); // Đảm bảo kích thước canvas vừa với thiết bị nhỏ
canvas.height = Math.min(window.innerHeight, 1024);

// Gọi hàm khi trang được tải
document.addEventListener("DOMContentLoaded", playRandomSong);
