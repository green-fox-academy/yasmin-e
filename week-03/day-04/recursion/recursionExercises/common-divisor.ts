/*  Find the greatest common divisor of two numbers using recursion.    */
function divisor(a: number, b: number) {
  if (b === 0) {
    return a;
  }
  return divisor(b, (a % b));
}
console.log(divisor(252, 105));
console.log(divisor(88, 12));
