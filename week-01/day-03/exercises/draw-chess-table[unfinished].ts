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

let lc: number = 7; 
let k: string = "%";
let j: string = " ";

for (let i: number = 1; i <= lc; i++) {
    if (i % 2 == 0) {
        console.log(j + k.repeat(4));
    }
    else {
        console.log(k.repeat(4))
    }

}