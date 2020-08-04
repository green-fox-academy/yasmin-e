/*  Create a function named isSymmetric that takes an n×n integer matrix (two dimensional array/list)
as a parameter and returns true if the matrix is symmetric or false if it is not.

Symmetric means it has identical values along its diagonal axis from top-left to bottom-right,
as in the first example.

Example 1:

[
  [1, 0, 1],
  [0, 2, 2],
  [1, 2, 5]
]
Output:

true
Example 2:

[
  [7, 7, 7],
  [6, 5, 7],
  [1, 2, 1]
]
Output:

false   */
const Matrix1: number[][] = [
  [7, 7, 7],
  [6, 5, 7],
  [1, 2, 1],
];
const Matrix2: number[][] = [
  [1, 0, 1],
  [0, 2, 2],
  [1, 2, 5],
];
const Matrix3: number[][] = [
  [1, 4, 3, 5, 1],
  [4, 6, 22, 34, 6],
  [3, 22, 89, 2, 99],
  [5, 34, 2, 18, 42],
  [1, 6, 99, 42, 21],
];
const Matrix4: number[][] = [
  [1, 4, 3, 7],
  [4, 6, 2, 4],
  [3, 2, 9, 2],
  [5, 8, 2, 1],
];
function isSymmetric(nxnMatrix: number[][]) {
    let symmetric: boolean = true;
  for (let i = 0; i < nxnMatrix.length; i += 1) {
    for (let j = 0; j < nxnMatrix[i].length / 2; j += 1) {
      if (nxnMatrix[i][j] !== nxnMatrix[i][nxnMatrix[i].length-j-1])
      symmetric = true;  
      return symmetric;
      }
      symmetric = false;
      return symmetric;
    }
  }
  if (symmetric === true) 
  return true;
}

console.log(isSymmetric(Matrix1));
console.log(isSymmetric(Matrix2));
console.log(isSymmetric(Matrix3));
console.log(isSymmetric(Matrix4));
