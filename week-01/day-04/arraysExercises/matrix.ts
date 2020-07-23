// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
'use strict';
let size: number = 5;
let Matrix: number[][] = [];
let string1: any = " 1";
let string0: any = " 0";


for (let i: number =0; i < size; i++) {
    Matrix[i]= [];
    for (let j: number = 0; j < size; j++)
 
    if (i == j) {
        Matrix[i][j] = string1;
    }
    else {
        Matrix[i][j] = string0;
    }
}
Matrix = Matrix.reverse();
console.log(Matrix);


for (let i: number = 0; i < Matrix.length; i++) {
    for (let j: number = 0; j < Matrix.length[i]; j++) {
    console.log(Matrix[i][j]);
 }
 console.log(`done:${i}`);
};