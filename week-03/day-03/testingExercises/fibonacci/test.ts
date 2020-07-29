import test from 'tape';
import getFiboMember from './fibonacci';

test('gives you the Fibonacci member corresponding to the index', (t) => {
  const exampleIndex = 8;
  const expected = 21;
  const actual = getFiboMember(exampleIndex);

  t.equal(expected, actual);
  t.end();
});

test('gives you 0 if the index is 0', (t) => {
  const exampleIndex1 = 0;
  const expected = 0;
  const actual = getFiboMember(exampleIndex1);

  t.equal(expected, actual);
  t.end();
});

test('gives you 0 if the index is smaller than 0', (t) => {
  const exampleIndex2 = -5;
  const expected = 0;
  const actual = getFiboMember(exampleIndex2);

  t.equal(expected, actual);
  t.end();
});
