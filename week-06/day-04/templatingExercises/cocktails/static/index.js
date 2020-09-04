/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
const buttons = document.querySelectorAll('.menu-item.alcohol');

const all = buttons[0];
const gin = buttons[1];
const vodka = buttons[2];
const rum = buttons[3];
const tequila = buttons[4];

const baseUrl = 'http://localhost:3000/';
const alcoholEndpoint = `${baseUrl}?alcohol=`;

all.onclick = () => {
  document.location.href = baseUrl;
};

buttons.forEach((button) => {
  button.onclick = (event) => {

    const url = `${alcoholEndpoint}${event.target.value}`;
    document.location.href = url;
  }
});
