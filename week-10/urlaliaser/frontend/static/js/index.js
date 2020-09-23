const backendUrl = 'http://localhost:3000/';
const postLinksUrl = `${backendUrl}api/links`;

const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const url = formData.get('url');
  const alias = formData.get('alias');
  console.log(url, alias);

  const options = {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ url: `${url}`, alias: `${alias}` }),
  };

  fetch(postLinksUrl, options)
    .then(async (response) => {
      if (response.status === 200) {
        const { secretCode } = await response.json();
        const responseDiv = document.getElementById('response');
        responseDiv.innerHTML = `Your URL is aliased to ${alias} and your secret code is ${secretCode}.`;
      } else if (response.status === 400) {
        const responseDiv = document.getElementById('response');
        responseDiv.innerHTML = 'Your alias is already in use!';
        responseDiv.style.color = 'red';
      }
    })
    .catch((error) => console.log(error.message));
});
