'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]
function drawSquare (x:number, y:number) {
    ctx.fillStyle = 'purple';
    ctx.strokeStyle = 'black';
    ctx.fillRect(x, y, 10, 10);
    ctx.strokeRect(x, y, 10, 10);
};

for (let i:number = 0; i<25; i++) {
    let x1 = 10;
    let y1 = 10;
    drawSquare(x1, y1);
    for (let j: number = 0; j<i; j++) {
        drawSquare(x1+=10, y1+=10);
    }
};