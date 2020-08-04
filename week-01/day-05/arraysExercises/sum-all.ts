
// -  Create a variable named `numbers` with the following content:
//   `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `numbers` to the console
'use strict';
let numbers: number[] = [3, 4, 5, 6, 7];
let sum: number = numbers.reduce(function(a, b) {
    return a+b;
});
console.log(sum);