const button = document.querySelector('button');
const container = document.querySelector('.container');
const url = 'http://api.icndb.com/jokes/random';

function getRandomJoke() {
  fetch(url)
    .then((response) => response.json())
    .then((myJson) => {
      const jokeStr = myJson.value.joke;
      const joke = document.createElement('p');
      joke.textContent = jokeStr;
      container.appendChild(joke);
    });
}

button.addEventListener('click', getRandomJoke);
