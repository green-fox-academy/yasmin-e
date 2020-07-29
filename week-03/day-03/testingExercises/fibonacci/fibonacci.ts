/*  Write a function that computes a member of the fibonacci sequence by a given index
Create tests for multiple test cases.   */
export default function getFiboMember(index: number): number {
  // creating a Fibonacci sequence array 'fib'
  const fib: number[] = [];

  // iterating through the array and pushing in Fibonacci values
  for (let i = 0; i < index; i += 1) {
    if (i === 0 || i === 1) {
      fib.push(1);
    } else {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
  }

  // adding an if statement for 3 cases: index = 0
  if (index === 0 || index < 0) {
    return 0;
  }

  // returning the corresponding member with index -1 since arrays index start at 0
  // eg. fourth member is index 3
  return fib[index - 1];
}
