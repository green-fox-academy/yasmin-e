const mapWith = (array, callback) => {
  const output = [];
  array.forEach((el) => {
    output.push(callback(el));
  });
  return output;
};

const addOne = (number) => number + 1;

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
// expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter', 'yasmine'];
const removeSecondLetter = (word) => String(word.substring(0, 1) + word.substring(2));

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle', 'ysmine']
