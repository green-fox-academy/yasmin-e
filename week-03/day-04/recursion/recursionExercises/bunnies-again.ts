/*  We have bunnies standing in a line, numbered 1, 2, ...
The odd bunnies (1, 3, ..) have the normal 2 ears.
The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot.
Recursively return the number of "ears" in the bunny line 1, 2, ... n
(without loops or multiplication). */
function bunnyEars(bunnies: number) {
  const minEarsEven = 2;
  const minEarsOdd = 3;
  if (bunnies === 0) {
    return 0;
  }
  if (bunnies === 1) {
    return minEarsOdd;
  }
  if (bunnies % 2 === 0) {
    return minEarsEven + bunnyEars(bunnies - 1);
  }
  return minEarsOdd + bunnyEars(bunnies - 1);
}

console.log(bunnyEars(7));
console.log(3 + 2 + 3 + 2 + 3 + 2 + 3);
