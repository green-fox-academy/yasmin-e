// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!
const toBeReversed = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

function reverse(value:string) {
  return value.split('').reverse().join('');
}

console.log(reverse(toBeReversed));
