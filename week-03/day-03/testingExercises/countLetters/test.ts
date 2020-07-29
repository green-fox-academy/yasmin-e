import test from 'tape';
import countLetters from './count-letters';

test('counts the letters contained in the string (not including spaces)', (t) => {
  const example = 'hhh yy nnn k';
  const expected = {
    h: 3,
    y: 2,
    n: 3,
    k: 1,
  };
  const actual = countLetters(example);

  t.deepEqual(actual, expected);
  t.end();
});

test('counts the letters contained in the string (not including special characters)', (t) => {
  const example1 = 'hhh yy!!!! n???????????***nn k';
  const expected = {
    h: 3,
    y: 2,
    n: 3,
    k: 1,
  };
  const actual = countLetters(example1);

  t.deepEqual(actual, expected);
  t.end();
});
