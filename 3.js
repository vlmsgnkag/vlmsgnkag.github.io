window.addEventListener("DOMContentLoaded", () => {
  const infoDiv = document.getElementById("hack-info");

  let html = `
    <h2>Phiên bản: <span style="color:#0f0;">${hackData.version}</span></h2>
    <p><strong>Ngày cập nhật:</strong> ${hackData.date}</p>
    <ul style="text-align:left;">
      ${hackData.features.map(f => `<li>${f}</li>`).join("")}
    </ul>
    <a href="${hackData.downloadLink}" class="download-btn" target="_blank">⬇️ Tải về ngay</a>
  `;

  infoDiv.innerHTML = html;
});
