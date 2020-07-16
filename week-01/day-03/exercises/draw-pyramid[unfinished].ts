'use strict';

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lc: number = 4;
let Star: string = "";

for (let i: number = 0; i <= lc; i++) {
    
    let spaceLength: number = lc - i;
    while (spaceLength >= lc) {
        console.log(" ");
        --spaceLength;
        }

    if (i==0) {
        Star = "*";
        console.log(Star);
    }
    else {
        Star += "**";
        console.log(Star);
    }
}

