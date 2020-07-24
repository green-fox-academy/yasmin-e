'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.
function drawBlack (x, y) {
    ctx.fillStyle = 'black';
    ctx.fillRect(x, y, 50, 50)
}

for (let i: number = 0; i<canvas.width; i+=100) {
    for (let j: number = 0; j<canvas.height; j+=100) {
        drawBlack(i, j);
    }
}

for (let i: number = 50; i<canvas.width; i+=100) {
    for (let j: number = 50; j<canvas.height; j+=100) {
        drawBlack(i, j);
    }
}


