/*  Write a function, that takes two strings and returns a
boolean value based on if the two strings are Anagramms or not.
Create a test for that. */
export default function AnagramsOrNot(a: string, b: string): boolean {
  if (a.split('').sort().join(',') === b.split('').sort().join(',')) {
    return true;
  }
  return false;
}
