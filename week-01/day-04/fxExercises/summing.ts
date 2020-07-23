'use strict';
// Write a function called `sum` that returns the sum of numbers from zero to the given parameter
function sum (n: number) {
    let sum0: number = 0;
    for (let i: number = 0; i <=n; i++) {
        sum0 += i;
    }
    return sum0;
};
console.log(sum(5));