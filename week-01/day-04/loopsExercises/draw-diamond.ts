'use strict';

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let lc: number = 7;
let Star: any = "";
let Space: any = "";

function diamond (lc: number) {
    for (let i: number = 0; i < lc; i++) {
        if (i < Math.round(lc /2)) {
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
        if (i > Math.round(lc/2)) {
           for (let k: number =- 1; k >= 1; k--) {
            Space = Space + " ";
            if (k == 1) {
                Star = Star + "*"
            }
            else {
                Star = Star + "**";
            }
        }
            
        console.log(Space + Star);
        Space = "";

        }
        
    }

};

diamond (lc);
