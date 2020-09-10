const xhr = new XMLHttpRequest();
const backend = 'http://localhost:3000/';

xhr.onload = () => {
  const response = JSON.parse(xhr.response);
  console.log(response);
};

xhr.open('GET', `${backend}`);
xhr.send();
