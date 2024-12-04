const container = document.getElementById("map-container");
const canvas = document.getElementById("map");
const ctx = canvas.getContext("2d");

function resize_canvas(_event) {
  console.log("resize canvas");
  canvas.width = container.offsetWidth;
  canvas.height = container.offsetHeight;
  draw();
}

window.addEventListener("resize", resize_canvas)
resize_canvas();

function draw() {
  console.log("draw");
  ctx.fillStyle = "#d0d0d0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#505050"
  for (let x = 0; x < canvas.width; x += 70) {
    ctx.fillRect(x, 0, 3, canvas.width)
  }
  for (let y = 0; y < canvas.height; y += 70) {
    ctx.fillRect(0, y, canvas.width, 3)
  }
}
