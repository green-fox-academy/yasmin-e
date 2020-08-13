/*  Create a function named is Symmetric that takes an n×n integer matrix
(two dimensional array/list) as a parameter and returns true if the matrix
is symmetric or false if it is not.

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
/*  const matrix1: number[][] = [
  [1, 0, 1],
  [0, 2, 2],
  [1, 2, 5],
];
const matrix2: number[][] = [
  [7, 7, 7],
  [6, 5, 7],
  [1, 2, 1],
];
const matrix3: number[][] = [
  [1, 0, 1, 8],
  [0, 2, 2, 8],
  [1, 2, 5, 8],
  [1, 2, 5, 8],
];  */
export default function isSymmetric(nxnMatrix: number[][]): boolean {
  for (let i = 0; i < nxnMatrix.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (nxnMatrix[j][i] !== nxnMatrix[i][j]) {
        return false;
      }
    }
  }
  return true;
}
