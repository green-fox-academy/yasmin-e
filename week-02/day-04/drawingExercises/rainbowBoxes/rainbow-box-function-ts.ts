'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.
function getRndColor() {
    let r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return `rgb(${r}, ${g}, ${b})`;
};

function drawSquare (size: number, color: any) {
    ctx.strokeStyle = color;
    ctx.strokeRect((canvas.width/2)-(size/2),  (canvas.height/2)-(size/2),  size,  size);
};

for (let i:number = 0; i<(canvas.width*canvas.height); i++) {
    let size:number = Math.floor(Math.random() * 2400);
    drawSquare(size, `${getRndColor()}`);
};