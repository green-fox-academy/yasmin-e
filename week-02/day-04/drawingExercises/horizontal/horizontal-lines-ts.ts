'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};


function getRndColor() {
    let r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.

function singleLine(x: number, y:number) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(50, y);
    ctx.strokeStyle = getRndColor();
    ctx.stroke();
};

for (let i: number = 0; i < 100; i++) {
    let randomX: number = Math.floor(Math.random() * 600);
    let randomY: number = Math.floor(Math.random() * 400);
    singleLine(randomX,  randomY);
};