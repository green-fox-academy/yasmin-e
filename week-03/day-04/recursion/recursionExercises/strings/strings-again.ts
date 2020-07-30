/*  Given a string, compute recursively a new string where all the 'x'
chars have been removed. */
function removeX(str: string): string {
  if (!str.includes('x')) {
    return str;
  }
  return removeX(str.replace('x', ''));
}
console.log(removeX('excuse me are you an ex-xibashton?'));
