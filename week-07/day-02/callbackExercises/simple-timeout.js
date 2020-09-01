// Write a program that prints apple after 3 seconds
const printApple = () => { console.log('Apple'); };
const printApple3sec = setTimeout(printApple, 3000);

console.log(printApple3sec);
