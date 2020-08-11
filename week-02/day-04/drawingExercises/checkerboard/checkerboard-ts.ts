const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.
function drawBlack(x, y) {
  ctx.fillStyle = 'black';
  ctx.fillRect(x, y, 50, 50);
}

for (let i = 0; i < canvas.width; i += 100) {
  for (let j = 0; j < canvas.height; j += 100) {
    drawBlack(i, j);
  }
}

for (let i = 50; i < canvas.width; i += 100) {
  for (let j = 50; j < canvas.height; j += 100) {
    drawBlack(i, j);
  }
}
