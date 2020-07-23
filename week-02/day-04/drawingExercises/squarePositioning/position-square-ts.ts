'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquare (x:number, y:number) {
    ctx.fillStyle = 'skyblue';
    ctx.fillRect(x, y, 50, 50);
};

for (let i:number = 0; i<3; i++) {
    let randomX: number = Math.floor(Math.random() * (canvas.width-50));
    let randomY: number = Math.floor(Math.random() * (canvas.height-50));
    drawSquare(randomX, randomY);
};