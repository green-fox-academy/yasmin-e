// API KEY yQCUIDAnsdSvCyJtkh4zYR6EoJ4NsN8a
const xhr = new XMLHttpRequest();
xhr.open(
  'GET',
  'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=moon+appollo+11+1969&api-key=yQCUIDAnsdSvCyJtkh4zYR6EoJ4NsN8a',
);
xhr.setRequestHeader('content-type', 'application/json');
xhr.send();

function handleReadyStateChange() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    const articlesArr = JSON.parse(xhr.response).response.docs;
    console.log(articlesArr);

    const mainDiv = document.querySelector('.main');

    articlesArr.forEach((article, index) => {
      const articleList = document.createElement('ul');
      articleList.setAttribute('id', `article-${index}`);

      const headline = document.createElement('li');
      headline.textContent = `Print headline: ${article.headline.main}`;
      articleList.appendChild(headline);

      if (article.snippet.length !== 0) {
        const snippet = document.createElement('li');
        snippet.textContent = `Snippet: ${article.snippet}`;
        articleList.appendChild(snippet);
      } else {
        const snippet = document.createElement('li');
        snippet.textContent = 'Snippet: Unavailable';
        articleList.appendChild(snippet);
      }

      const publicationDate = document.createElement('li');
      publicationDate.textContent = `Publication date: ${article.pub_date}`;
      articleList.appendChild(publicationDate);

      mainDiv.appendChild(articleList);
    });
  }
}

xhr.onreadystatechange = handleReadyStateChange;
