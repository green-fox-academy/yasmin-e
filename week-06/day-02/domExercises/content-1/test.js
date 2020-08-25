let animals = document.querySelector('.animals');
let paragraphs = document.querySelectorAll('p');

paragraphs.forEach((p) => {
 p.append(' '.concat(animals.textContent));
});

paragraphs.forEach((p) => {
 p.append(' ');
 p.innerHTML += animals.innerHTML;
});
