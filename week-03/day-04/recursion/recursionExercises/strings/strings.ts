/*  Given a string, compute recursively
a new string where all the lowercase 'x'
chars have been changed to 'y' chars    */

function xToy(str: string): string {
  if (!str.includes('x')) {
    return str;
  }
  return xToy(str.replace('x', 'y'));
}
console.log(xToy('excuse me are you an ex-xibashton?'));
