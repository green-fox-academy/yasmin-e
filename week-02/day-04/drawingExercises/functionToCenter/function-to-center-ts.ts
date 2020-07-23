'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function singleLine (x:number,y:number) {
    ctx.strokeStyle = 'yellowgreen';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width/2, canvas.height/2);
    ctx.stroke();
}

for (let i: number = 0; i < canvas.width; i+=20) {
    singleLine(i, 0);
}
for (let i: number = 0; i < canvas.height; i+=20) {
    singleLine(canvas.width, i);
}
for (let i: number = canvas.width; i > 0; i-=20) {
   singleLine(i, canvas.height);
}
for (let i:number = canvas.height; i > 0; i-=20) {
    singleLine(0, i);
}