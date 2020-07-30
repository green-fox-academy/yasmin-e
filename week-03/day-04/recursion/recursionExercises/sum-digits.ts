/*  Given a non-negative integer n, return the sum of its digits recursively (without loops).

Hint: There is no integer type in JavaScript.
To remove the rightmost digit you must divide (/)
the number by 10 and find a way to get the the whole number
portion of that number.   */

function sumDigits(n: number) {
  const remainder = n % 10;
  let sum = remainder;
  if (n >= 10) {
    const rest = Math.floor(n / 10);
    sum += sumDigits(rest);
  }
  return sum;
}
console.log(sumDigits(55));
