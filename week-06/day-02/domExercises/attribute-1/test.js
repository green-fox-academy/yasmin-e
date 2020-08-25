let img = document.querySelector("img");
console.log(img.getAttribute('src'));

img.setAttribute('src', 'https://i.kym-cdn.com/photos/images/original/001/384/545/7b9.jpg');

let link = document.querySelector('a');
link.setAttribute('href', 'https://www.greenfoxacademy.com/');

let secondButton = document.querySelectorAll('button')[1];
secondButton.disabled = true;
secondButton.textContent = `Don't click me!`;