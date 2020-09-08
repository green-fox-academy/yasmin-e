async function getAll() {
  const data = await Promise.all([
    fetch('https://swapi.dev/api/people/?search=').then((response) => response.json()),
    fetch('https://swapi.dev/api/films/?search=').then((response) => response.json()),
  ]);
  const peopleArr = data[0].results;
  const filmsArr = data[1].results;
  console.log(filmsArr);
  console.log(peopleArr);

  const displayResults = () => {
    const searchQuery = document.querySelector('input').value;
    console.log(`this is the search query: ${searchQuery}`);

    peopleArr.forEach((item) => {
      if (item.name.toLowerCase().includes(`${searchQuery}`)) {
        const list1Item = document.createElement('li');
        const movieButton = document.createElement('button');
        const itemData = item.name;

        movieButton.textContent = itemData;
        movieButton.setAttribute('id', 'movie-button');
        movieButton.setAttribute('value', `${item.url}`);
        const list1 = document.querySelector('.list1');

        list1Item.appendChild(movieButton);
        list1.appendChild(list1Item);
      }
    });
  };
  const searchBtn = document.getElementById('search-button');
  searchBtn.addEventListener('click', displayResults);
  const movieBtn = document.querySelector('#movie-button');

  const displayFilms = () => {
    const characterUrl = movieBtn.value;
    console.log(characterUrl);
    filmsArr.forEach((film) => {
      if (film.characters.some((url) => url === characterUrl)) {
        const movie = `${film.title} (${film.release_date})`;
        const movies = [];
        movies.push(movie);
        movies.forEach((movie) => {
          const list2Item = document.createElement('li');
          list2Item.textContent = movie;

          const list2 = document.querySelector('.list2');
          list2.appendChild(list2Item);
        });
      }
    });
  };

  movieBtn.addEventListener('click', displayFilms);
}
getAll();
