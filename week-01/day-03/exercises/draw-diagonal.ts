'use strict';
// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

let lc: number = 6;
let line: any = "";
let diagonal: any = "";

function square (lc: number) {
    for (let i: number = 0; i <= lc; i++) {
        if (i == 0 || i == lc) {
            line = "%";
            console.log(line.repeat(lc));
        }
        else {
            diagonal += "%";
            for (let j: number = 1; j < (lc - 1); j++) {
                if (i == j) {
                    diagonal += "%";
                }
                else {
                    diagonal += " ";
                }
            }
            
            console.log(diagonal + "%");
            diagonal = "";
        }
    }
};
square (lc);

