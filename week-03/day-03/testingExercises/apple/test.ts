import test from 'tape';
import Apple from './apple';

test('return apple', (t) => {
  const GoldenApple = new Apple();
  const actual = GoldenApple.getApple();
  const expected = 'apples';

  t.equal(actual, expected);
  t.end();
});
