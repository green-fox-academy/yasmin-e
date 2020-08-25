let list = document.querySelector('ul');

let greenfox = document.createElement('li');
greenfox.textContent = 'The Green Fox';
list.appendChild(greenfox);

let lamplighter = document.createElement('li');
lamplighter.textContent = 'The Lamplighter';
list.appendChild(lamplighter);

let container = document.querySelector('.container');

let header = document.createElement('h1');
header.textContent = 'I can add elements to the DOM!';
container.appendChild(header);

let img = document.createElement('img');
img.setAttribute('src', 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.15752-9/118435171_322078272316362_8825257523629379701_n.jpg?_nc_cat=109&_nc_sid=b96e70&_nc_ohc=fLtmzrE9dw8AX-5d3f3&_nc_ht=scontent-vie1-1.xx&oh=8629593bd7ec7408ef02b212ecb1b4e7&oe=5F6B9423');

container.appendChild(img);