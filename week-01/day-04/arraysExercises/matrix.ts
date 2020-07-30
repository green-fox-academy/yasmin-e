/* eslint-disable @typescript-eslint/no-explicit-any */
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

const size = 5;
let Matrix: number[][] = [];
const string1: any = ' 1';
const string0: any = ' 0';

for (let i = 0; i < size; i += 1) {
  Matrix[i] = [];
  for (let j = 0; j < size; j += 1) {
    if (i === j) {
      Matrix[i][j] = string1;
    } else {
      Matrix[i][j] = string0;
    }
  }
}
Matrix = Matrix.reverse();
console.log(Matrix.join('\n'));
