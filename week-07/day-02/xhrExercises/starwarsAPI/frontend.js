/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
const xhr = new XMLHttpRequest();
xhr.open(
  'GET',
  'https://swapi.dev/api/people/?search=',
);
xhr.send();
xhr.onreadystatechange = handleReadyStateChanged;

function handleReadyStateChanged() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    const dataArr = JSON.parse(xhr.response).results;
    console.log(dataArr);

    const displayResults = () => {
      const searchQuery = document.querySelector('input').value;
      console.log(`this is the search query: ${searchQuery}`);

      dataArr.forEach((item) => {
        if (item.name.toLowerCase().includes(`${searchQuery}`)) {
          const list1Item = document.createElement('li');
          const itemData = item.name;

          list1Item.textContent = itemData;
          const list1 = document.querySelector('.list1');

          list1.appendChild(list1Item);
        }
      });
    };

    const searchBtn = document.getElementById('search-button');
    searchBtn.addEventListener('click', displayResults);
  }
}
