/*  Given a string, compute recursively a new string where all the adjacent
chars are now separated by a *  */

function starSeperator(str: string): string {
  if (str.length === 0) {
    return str;
  }
  return str.slice(0, 1).concat('*') + starSeperator(str.slice(1, str.length));
}
console.log(starSeperator('hey whats up with you today?'));
