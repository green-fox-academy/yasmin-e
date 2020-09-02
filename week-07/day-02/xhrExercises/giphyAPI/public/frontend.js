let xhr = new XMLHttpRequest();

xhr.onreadystatechange = console.log('fuck you');

xhr.open('GET', 'api.giphy.com/v1/gifs/search');
xhr.send();
console.log(`Response: ${xhr.response}`);
