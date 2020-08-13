import fs from 'fs';

function getMostCommonChars(filename: string) {
  const inputArr = fs.readFileSync(filename, 'utf-8').toLocaleLowerCase().split('');
  const alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const lettersArr = inputArr.filter((value) => {
    if (alphabetArr.includes(value)) {
      return value;
    }
    return null;
  }).sort();

  const charOccurences = {};
  for (let i = 0; i < lettersArr.length; i += 1) {
    if (!charOccurences[lettersArr[i]]) {
      charOccurences[lettersArr[i]] = 0;
    }
    charOccurences[lettersArr[i]] += 1;
  }

  const entries = Object.entries(charOccurences);
  let sortedEntries = entries.sort((a: [string, number], b: [string, number]) => a[1] - b[1]);
  sortedEntries = sortedEntries.slice(sortedEntries.length - 2,
    sortedEntries.length);

  const twoMostcommon = Object.fromEntries(sortedEntries);
  return twoMostcommon;
}
try {
  console.log(getMostCommonChars('mostCommonChars.txt'));
} catch (e) {
  console.log('File does not exist!');
}
