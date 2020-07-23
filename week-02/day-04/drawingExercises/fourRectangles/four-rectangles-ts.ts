'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.
function getRndColor() {
    let r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return `rgb(${r}, ${g}, ${b})`;
};

function drawRectangle (x: number, y: number, w: number, h: number) {
    ctx.fillStyle = `${getRndColor()}`;
    ctx.fillRect(x, y, w, h);
};

for (let i: number = 0; i<4; i++) {
    let randomX: number = Math.floor(Math.random() * (canvas.width-10));
    let randomY: number = Math.floor(Math.random() * (canvas.height-10));
    let randomW: number = Math.floor(Math.random() * canvas.width);
    let randomH: number = Math.floor(Math.random() * canvas.height);
    drawRectangle(randomX, randomY, randomW, randomH);
};