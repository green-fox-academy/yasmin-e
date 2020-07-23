'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]
function drawSquare (x:number, y:number, w:number, h:number) {
    ctx.fillStyle = 'purple';
    ctx.strokeStyle = 'black';
    ctx.fillRect(x, y, w, h);
    ctx.strokeRect(x, y, w, h);
};

for (let i:number = 0; i<7; i++) {
    let x1 = 10;
    let y1 = 10;
    let w1 = 10;
    let h1 = 10;
    drawSquare(x1, y1, w1, h1);
    for (let j: number = 0; j<i; j++) {
        drawSquare(x1+=w1, y1+=h1, w1+=10, h1+=10);
    }
};