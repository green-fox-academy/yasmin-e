/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
//   1: generate 100 divs to the <section> element
//   and add index numbers to it as the element's textContent

//   2: Create a function that adds a 'not-prime' class
//   to a div if it's not a prime and 'prime' if it is

//   3: Create a timer that keeps calling the prime
//   validatior function until it reaches the end of elements
//    - the timer should fire every 100ms
//    - the timer should stop when there are no more elements left to be colored

const generateDiv = (number, parentEl) => {
  for (let i = 2; i < number + 1; i += 1) {
    const div = document.createElement('div');
    div.textContent = i;
    parentEl.appendChild(div);
  }
};

const section = document.querySelector('section');
generateDiv(100, section);

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num % 2 === 0 && num > 2) return false;
  const s = Math.sqrt(num);
  for (let i = 3; i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const divs = document.querySelectorAll('div');

const primeOrNot = (el) => {
  for (let i = 0; i < el.length; i += 1) {
    if (isPrime(Number(el[i].textContent))) {
      el[i].classList.add('prime');
    } else {
      el[i].classList.add('not-prime');
    }
  }
};

const primeTimer = (time, el) => setTimeout(primeOrNot, time, el);

primeTimer(100, divs);
