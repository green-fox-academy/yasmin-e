'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.
 ctx.beginPath();
 ctx.moveTo(100, 100);
 ctx.lineTo(200, 100);
 ctx.strokeStyle = 'pink';
 ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(100, 200);
ctx.strokeStyle = 'magenta';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(200, 200);
ctx.strokeStyle = 'black';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(200, 200);
ctx.strokeStyle = 'gray';
ctx.stroke();