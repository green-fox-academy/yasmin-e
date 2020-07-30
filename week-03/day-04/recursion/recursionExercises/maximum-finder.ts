/*  Write a function that finds the largest element of an array using recursion.    */
function findMax(arr: number[]): number {
  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      return arr[0];
    }
    return arr[1];
  }
  if (arr[arr.length - 1] > arr[arr.length - 2]) {
    arr[arr.length - 2] = arr[arr.length - 1];
    return findMax(arr.slice(0, arr.length - 1));
  }
  return findMax(arr.slice(0, arr.length - 1));
}
console.log(findMax([5, 7, 66, 1542, 88, -33]));
