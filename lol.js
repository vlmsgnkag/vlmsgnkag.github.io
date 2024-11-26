// Đếm ngược đến Năm Mới
const newYearDate = new Date("January 1, 2025 00:00:00").getTime();
const countdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = newYearDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  if (distance < 0) {
    clearInterval(countdown);
    document.querySelector(".countdown").innerHTML = "Chúc Mừng Năm Mới!";
    document.getElementById("newYearMessage").style.display = "block";
    createFireworks();
  }
}, 1000);

// Tạo hiệu ứng pháo bông
function createFireworks() {
  const fireworksContainer = document.getElementById("fireworks");
  for (let i = 0; i < 20; i++) {
    const burst = document.createElement('div');
    burst.classList.add('firework');
    burst.style.left = `${Math.random() * 100}%`;
    burst.style.top = `${Math.random() * 100}%`;
    fireworksContainer.appendChild(burst);
  }
}
