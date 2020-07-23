'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function getRndColor() {
    let r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return `rgb(${r}, ${g}, ${b})`;
};

function drawSquare (size: number) {
    ctx.strokeStyle = `${getRndColor()}`;
    ctx.strokeRect((canvas.width/2)-(size/2),  (canvas.height/2)-(size/2),  size,  size);
};

for (let i:number = 0; i<3; i++) {
    let size:number = Math.floor(Math.random() * 200);
    drawSquare(size);
};
