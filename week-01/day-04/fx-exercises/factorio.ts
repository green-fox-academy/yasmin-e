'use strict';
// -  Create a function called `factorio`
//    that returns it's input's factorial
function factorio (n: number) {
    let n0: number = 1;
    for (let i: number = 1; i <= n; i++) {
        n0 *= i;
    }
    return n0;
};
console.log(factorio(40));