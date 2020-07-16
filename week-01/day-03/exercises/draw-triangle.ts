'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
let lc: number = 4;
let Star: string = ""

for (let i: number = 0; i <= lc; i++) {
    Star += "*";
    console.log(Star)
}