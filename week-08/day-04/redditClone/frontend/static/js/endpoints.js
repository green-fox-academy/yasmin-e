const xhr = new XMLHttpRequest();
const backend = 'http://localhost:3000';

function listPosts() {
  xhr.onload = () => {
    const postsArr = JSON.parse(xhr.response).posts;
    console.log(postsArr);

    const postsDiv = document.querySelector('.posts');

    postsArr.forEach((postObj) => {
      const post = document.createElement('div');
      post.setAttribute('class', 'post');

      const titleDiv = document.createElement('div');
      titleDiv.setAttribute('class', 'post-title');
      const title = document.createElement('p');
      title.textContent = postObj.title;
      const url = document.createElement('a');
      url.setAttribute('href', `${postObj.url}`);
      url.textContent = `(${postObj.url})`;
      titleDiv.appendChild(title);
      titleDiv.appendChild(url);
      post.appendChild(titleDiv);

      const infoDiv = document.createElement('div');
      infoDiv.setAttribute('class', 'post-info');
      infoDiv.textContent = `submitted at ${postObj.time}`;
      post.appendChild(infoDiv);

      const linksDiv = document.createElement('div');
      linksDiv.setAttribute('class', 'post-links');
      post.appendChild(linksDiv);

      const votesDiv = document.createElement('div');
      votesDiv.setAttribute('class', 'post-votes');
      votesDiv.textContent = `${postObj.score}`;
      post.appendChild(votesDiv);

      postsDiv.appendChild(post);
    });
  };

  xhr.open('GET', `${backend}/posts`);
  xhr.send();
}

listPosts();
