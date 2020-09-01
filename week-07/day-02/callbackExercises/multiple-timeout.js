// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

const printFruits = (fruit, timer) => {
  const printFruit = () => { console.log(fruit); };
  setTimeout(printFruit, timer);
};

printFruits('Apple', 0);
printFruits('Pear', 1000);
printFruits('Melon', 3000);
printFruits('Grapes', 5000);
