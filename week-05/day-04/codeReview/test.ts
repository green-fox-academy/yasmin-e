import test from 'tape';
import isSymmetric from './symmetricmatrix';

test('tells if a square matrix is Symmetric', (t) => {
  const matrix1: number[][] = [
    [1, 0, 1],
    [0, 2, 2],
    [1, 2, 5],
  ];
  const expected = true;
  const actual = isSymmetric(matrix1);
  t.equal(actual, expected);
  t.end();
});

test('tells if a square matrix is not simmetric', (t) => {
  const matrix1: number[][] = [
    [1, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
  ];
  const expected = false;
  const actual = isSymmetric(matrix1);
  t.equal(actual, expected, 'matrix1');

  const matrix2: number[][] = [
    [1, 0, 1],
    [2, 2, 2],
    [1, 2, 5],
  ];
  const expected2 = false;
  const actual2 = isSymmetric(matrix2);
  t.equal(actual2, expected2, 'matrix2');

  const matrix3: number[][] = [
    [1, 0, 1],
    [0, 2, 2],
    [2, 2, 5],
  ];
  const expected3 = false;
  const actual3 = isSymmetric(matrix3);
  t.equal(actual3, expected3, 'matrix3');
  t.end();
});
