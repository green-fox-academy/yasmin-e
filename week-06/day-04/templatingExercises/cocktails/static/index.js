/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
const buttons = document.querySelectorAll('button');

const all = buttons[0];
const gin = buttons[1];
const vodka = buttons[2];
const rum = buttons[3];
const tequila = buttons[4];

all.onclick = () => {
  const urlBase = 'http://localhost:3000/';
  const url = `${urlBase}`;
  document.location.href = url;
};

gin.onclick = () => {
  const urlBase = 'http://localhost:3000/?alcohol=';
  const url = `${urlBase}gin`;
  document.location.href = url;
};

vodka.onclick = () => {
  const urlBase = 'http://localhost:3000/?alcohol=';
  const url = `${urlBase}vodka`;
  document.location.href = url;
};

rum.onclick = () => {
  const urlBase = 'http://localhost:3000/?alcohol=';
  const url = `${urlBase}rum`;
  document.location.href = url;
};

tequila.onclick = () => {
  const urlBase = 'http://localhost:3000/?alcohol=';
  const url = `${urlBase}tequila`;
  document.location.href = url;
};
