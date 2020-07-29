import test from 'tape';
import Integers from './sum';

test('calculates the sum of an empty list of numbers', (t) => {
  const emptyList = new Integers([]);
  const expected = 0;
  const actual = emptyList.sum();

  t.isEqual(actual, expected);
  t.end();
});

test('calculates the sum of a single number list', (t) => {
  const oneNumberList = new Integers([55]);
  const expected = 55;
  const actual = oneNumberList.sum();

  t.isEqual(actual, expected);
  t.end();
});

test('calculates the sum of a multiple numbers list', (t) => {
  const numbersList = new Integers([5, 22, 147, -5, 3, 0]);
  const expected = 172;
  const actual = numbersList.sum();

  t.isEqual(actual, expected);
  t.end();
});
