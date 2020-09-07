const rightButton = document.getElementById('rightButton');
const mainImg = document.getElementById('mainImg');

rightButton.onclick = () => {
  window.location.href = `/?src=${mainImg.dataset.nextPath}`;
};
