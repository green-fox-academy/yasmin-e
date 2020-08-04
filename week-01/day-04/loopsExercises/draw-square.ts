'use strict';
// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

let lc: number = 6;
let line: any = "";
let space: any = "";

function square (lc: number) {
    for (let i: number = 0; i <= lc; i++) {
        if (i == 0 || i == lc) {
            line = "$";
            console.log(line.repeat(lc));
        }
        else {
            line = "$";
            space = " ";
            console.log(line + space.repeat(lc - 2) + line);
        }
    }
};

square (lc);