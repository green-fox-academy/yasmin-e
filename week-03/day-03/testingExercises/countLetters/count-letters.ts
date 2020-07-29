import { count } from 'console';

/*  Write a function, that takes a string as an argument
and returns a dictionary with all letters in the string as keys,
and numbers as values that shows how many occurrences there are.
Create a test for that. */
function countLetters(a: string) {
  const orderedString = a.split('').sort().join('');
  console.log(orderedString);
}

countLetters('hey yasmine whats up');
