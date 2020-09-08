/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

//  Giphy API KEY: HVwvhtyWjGipQRcF4ZJMGzcA3lcrJkB4
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = handleReadyStateChanged;
xhr.open(
  'GET',
  'https://api.giphy.com/v1/gifs/search?api_key=HVwvhtyWjGipQRcF4ZJMGzcA3lcrJkB4&q=yas+queen&offset=0&limit=20',
);
xhr.setRequestHeader('content-type', 'application/json');
xhr.send();

const gifsDiv = document.querySelector('.gifs');
console.log(gifsDiv);

function handleReadyStateChanged() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    const gifsArr = JSON.parse(xhr.response).data;
    console.log(gifsArr);
    gifsArr.forEach((gif) => {
      const link = document.createElement('a');
      const gifUrl = gif.bitly_gif_url;
      link.setAttribute('href', gifUrl);

      const img = document.createElement('img');
      const thumbnailUrl = gif.images.fixed_height_small.url;
      img.setAttribute('src', thumbnailUrl);

      link.appendChild(img);
      gifsDiv.appendChild(link);
    });
  }
}
