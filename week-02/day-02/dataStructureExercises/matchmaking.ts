// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

const girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
const boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(arr1: string[], arr2: string[]) {
  const matches = [];
  if (arr1.length > arr2.length) {
    for (let i = 0; i < arr1.length; i += 1) {
      matches.push(arr1[i]);
      matches.push(arr2[i]);
    }
  } else {
    for (let i = 0; i < arr2.length; i += 1) {
      matches.push(arr1[i]);
      matches.push(arr2[i]);
    }
  }
  return matches;
}

console.log(makingMatches(girls, boys));
