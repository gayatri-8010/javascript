function toggleParagraph() {
  const para = document.getElementById("myPara");
  const button = document.getElementById("toggleBtn");

  if (para.style.display === "none") {
    para.style.display = "block";
    button.innerText = "Hide";
  } else {
    para.style.display = "none";
    button.innerText = "Show";
  }
}