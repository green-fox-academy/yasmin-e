'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 600, 400);

function stars(x: number, y:number, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 2, 2);
}

for (let i: number = 0; i < 150; i++) {
    let randomX: number = Math.floor(Math.random() * canvas.width);
    let randomY: number = Math.floor(Math.random() * canvas.height);
    stars(randomX,  randomY, 'white');
}