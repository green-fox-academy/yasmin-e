const backend = 'http://localhost:3000';

window.onload(fetch(backend)
  .then((response) => console.log(response.json())));
