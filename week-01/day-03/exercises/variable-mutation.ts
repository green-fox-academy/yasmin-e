'use strict';

let a: number = 3;
// make it bigger by 10
a = a + 10;

console.log(a);

let b: number = 100;
// make it smaller by 7
b = b - 7;

console.log(b);

let c: number = 44;
// double c's value
c = c * 2;

console.log(c);

let d: number = 125;
// divide d's value by 5
d = d / 5;

console.log(d);

let e: number = 8;
// what's the cube of e's value?
e = e**3;

console.log(e);

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)
let result1: boolean = f1 > f2;
console.log(result1);

let g1: number = 350;
let g2: number = 200;
// tell if the double of g2 is bigger than g1 (as a boolean)
let result2: boolean = g2*2 > g1;
console.log(result2);

let h: number = 1357988018575474;
// tell if 11 is a divisor of h (as a boolean)
let result3: boolean = h % 11 == 0;
console.log(result3);

let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
let result4: boolean = i1 > i2**2 && i1 < i2**3;
console.log(result4);

let j: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean)
let result5: boolean = j % 3 == 0 || j % 5 == 0;
console.log(result5);