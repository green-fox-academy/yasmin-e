let list = document.querySelector('ul');

const planetData = [
 {
  category: 'inhabited',
  content: 'Foxes',
  asteroid: true,
 },
 {
  category: 'inhabited',
  content: 'Whales and Rabbits',
  asteroid: true,
 },
 {
  category: 'uninhabited',
  content: 'Baobabs and Roses',
  asteroid: true,
 },
 {
  category: 'inhabited',
  content: 'Giant monsters',
  asteroid: false,
 },
 {
  category: 'inhabited',
  content: 'Sheep',
  asteroid: true,
 },
];

planetData.forEach((obj) => {
 if (obj.asteroid === true) {
  let newAsteroid = document.createElement('li');
  newAsteroid.textContent = obj.content;
  newAsteroid.classList.add(obj.category);
  list.appendChild(newAsteroid);
 }
});
