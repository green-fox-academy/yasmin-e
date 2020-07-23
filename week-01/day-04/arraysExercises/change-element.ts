// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test
'use strict'
let numbers: number[] = [1, 2, 3, 8, 5, 6];
let realNumbers: number[] = numbers.map(function(a, b): number { 
    return numbers[a]=b+1;
});
console.log(realNumbers);