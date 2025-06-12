const colors = ["#ff9999", "#99ccff", "#99ff99"];  // red, blue, green
let currentColor = 0;

function cycleColor() {
  const box = document.getElementById("colorBox");
  currentColor = (currentColor + 1) % colors.length;
  box.style.backgroundColor = colors[currentColor];
}