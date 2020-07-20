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

let lc: number = 5;
let Star: string = "";
let Space: string = "";

function pyramid (lc: number) {
    for (let i: number = 0; i < lc; i++) {
        for (let j: number = 0; j < (lc - i); j++) {
            Space = Space + " ";
        }
            if (i == 0) {
                Star = Star + "*"
            }
            else {
                Star = Star + "**";
            }
        console.log(Space + Star);
        Space = "";
    }
};

pyramid (lc);

