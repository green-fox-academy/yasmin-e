// -  Create a variable named `numbers` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console
'use strict';
let numbers: number[] = [1, 2, 3, 4, 5];
numbers[2] = numbers[2] + 1;
console.log(numbers[2]);