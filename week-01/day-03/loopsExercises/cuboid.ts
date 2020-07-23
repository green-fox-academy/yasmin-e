'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let l: number = 5.43;
let b: number = 2.05;
let h: number = 9.52;

let A: number = 2*((l*b) + (b*h) + (l*h));
let V: number = (l*b*h);


console.log("Surface Area: " + (Math.round(A)));
console.log("Volume: " + (Math.round(V)));
