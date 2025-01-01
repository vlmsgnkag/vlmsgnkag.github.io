// Danh sách bài viết
const articles = [
    {
      title: "Report 13 tuổi - Báo cáo tài khoản Facebook",
      image: "images/facebook-icon.png",
      summary: "Hướng dẫn chi tiết cách báo cáo tài khoản Facebook chưa đủ tuổi.",
      url: "report-13.html",
    },
    {
      title: "TUT DAME 282 - Mới nhất 2025",
      image: "images/facebook-icon.png",
      summary: "TUT DAME 282 FAKE CLONE - VIA MỚI NHẤT 2025",
      url: "dame-282.html",
    },
    {
      title: "Cách xác minh danh tính Facebook",
      image: "images/facebook-icon.png",
      summary: "Hướng dẫn từng bước để xác minh danh tính tài khoản Facebook.",
      url: "verify-facebook.html",
    },
  ];
  
  // Tạo giao diện bài viết
  const container = document.getElementById("articles-container");
  
  articles.forEach((article) => {
    const articleElement = document.createElement("div");
    articleElement.classList.add("article");
    articleElement.innerHTML = `
      <img src="${article.image}" alt="${article.title}">
      <div class="article-content">
        <h3>${article.title}</h3>
        <p>${article.summary}</p>
        <a href="${article.url}" target="_blank">Xem chi tiết</a>
      </div>
    `;
    container.appendChild(articleElement);
  });
  
