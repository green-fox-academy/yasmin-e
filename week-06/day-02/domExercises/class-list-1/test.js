let paragraphs = document.querySelectorAll('p');

if (paragraphs[3].classList.value === 'dolphin') {
 paragraphs[0].textContent = 'pear';
};

if (paragraphs[0].classList.value === 'apple') {
 paragraphs[2].textContent = 'dog';
};

let apple = document.querySelector('.apple');
apple.classList.add('red');

let balloon = document.querySelector('.balloon');
balloon.style.borderRadius = '0%';