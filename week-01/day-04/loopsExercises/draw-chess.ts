'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//
let lc: number = 8;
let percentage: any = "";
let space: any = "";
function chess (lc: number) {
    for (let i: number = 0; i < lc; i++) {
        if (i % 2 == 0) {
            percentage = "% ";
            space =
            console.log(percentage.repeat(4));
        }
        else {
            percentage = "% ";
            space = " ";
            console.log(space + percentage.repeat(4));
        }
    }
};
chess(lc); 