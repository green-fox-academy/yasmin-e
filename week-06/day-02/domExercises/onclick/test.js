let partyButton = document.querySelector('button');
let pageBody = document.querySelector('body');

partyButton.onclick = () => {
 pageBody.classList.add('party');
};