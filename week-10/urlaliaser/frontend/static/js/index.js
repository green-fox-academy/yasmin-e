const backendUrl = 'http://localhost:3000/';
const postLinksUrl = `${backendUrl}api/links`;

const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const url = formData.get('url');
  const alias = formData.get('alias');

  const options = {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: { url: `${url}`, alias: `${alias}` },
  };

  fetch(postLinksUrl, options)
    .then((response) => response.json());
});
