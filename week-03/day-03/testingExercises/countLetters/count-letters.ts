/* eslint-disable max-len */
/*  Write a function, that takes a string as an argument
and returns a dictionary with all letters in the string as keys,
and numbers as values that shows how many occurrences there are.
Create a test for that. */
export default function countLetters(string: string): unknown {
  // turning the string into an array 'stringArray'
  let stringArray = string.split('');

  // creating an alphabetArray with all letters of the alphabet
  const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  // filtering out all elements of stringArray that aren't letters
  stringArray = stringArray.filter((element) => alphabetArray.includes(element));

  // creating an object 'dictionary'
  const dictionary = {};

  // iterating through our 'stringArray'
  for (let i = 0; i < stringArray.length; i += 1) {
    // if the key of our object 'dictionary' does not appear we're setting the value to 0
    if (!dictionary[stringArray[i]]) dictionary[stringArray[i]] = 0;

    // else we're adding one to the value of that key
    dictionary[stringArray[i]] += 1;
  }

  // returning our object 'dictionary'
  return dictionary;
}
console.log(countLetters('!!!!!!!!yiooooooo spoooderman yoooo(((_\'"_'));
