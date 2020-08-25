let animals = document.querySelector('.animals');

let paragraphs = document.querySelectorAll('p');
paragraphs.forEach((p) => {
 p.innerHTML = animals.innerHTML;
});
