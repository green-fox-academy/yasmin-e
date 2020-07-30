/*  We have a number of bunnies and each bunny has two big floppy ears.
We want to compute the total number of ears across all the bunnies recursively
(without loops or multiplication).   */

function bunnyEars(bunnies: number) {
  const minEars = 2;
  if (bunnies === 0) {
    return 0;
  }
  if (bunnies === 1) {
    return minEars;
  }

  return minEars + bunnyEars(bunnies - 1);
}

console.log(bunnyEars(20));
