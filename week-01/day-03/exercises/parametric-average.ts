'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

let Sum: number = 0;
let I: number = 0;

for (let i: number = 1; i <= 5; i++) {
    Sum += i;
    I = i;
}

console.log(`Sum: ${Sum} Average: ${Sum/I}`)