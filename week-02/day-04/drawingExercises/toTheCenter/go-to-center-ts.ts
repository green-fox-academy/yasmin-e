'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.
function getRndColor() {
    let r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function toTheCenter (x: number, y: number) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width/2, canvas.height/2);
    ctx.strokeStyle = getRndColor();
    ctx.stroke();
};

for (let i: number = 0; i < 510; i++) {
    let random1: number = Math.floor(Math.random() * 600);
    let random2: number = Math.floor(Math.random() * 400);
    toTheCenter(random1,  random2);
};
