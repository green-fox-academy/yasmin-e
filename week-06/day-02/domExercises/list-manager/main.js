/* eslint-disable no-undef */
const pageBody = document.querySelector('body');
const container = document.createElement('div');
container.setAttribute('class', 'container');
pageBody.appendChild(container);

const inputBox = document.createElement('div');
inputBox.setAttribute('class', 'inputBox');

const inputArr = ['bread', 'milk', 'orange', 'tomato'];
inputArr.forEach((input) => {
  const newInput = document.createElement('p');
  newInput.textContent = input;
  newInput.setAttribute('class', 'input');
  inputBox.appendChild(newInput);
});

const buttonsBox = document.createElement('div');
buttonsBox.setAttribute('class', 'buttonsBox');

const buttonsArr = ['Up', '>', 'X', 'Down'];
buttonsArr.forEach((button) => {
  const newButton = document.createElement('button');
  newButton.textContent = button;
  newButton.setAttribute('class', 'button');
  buttonsBox.appendChild(newButton);
});

const outputBox = document.createElement('div');
outputBox.setAttribute('class', 'inputBox');

container.appendChild(inputBox);
container.appendChild(buttonsBox);
container.appendChild(outputBox);

let inputs = document.querySelectorAll('.input');
inputs[0].classList.add('selected');

const buttons = document.querySelectorAll('button');
const up = buttons[0];
const down = buttons[3];
const move = buttons[1];
const remove = buttons[2];

up.onclick = () => {
  for (let i = 1; i < inputs.length; i += 1) {
    if (inputs[i].classList.contains('selected')) {
      inputs[i].classList.remove('selected');
      inputs[i - 1].classList.add('selected');
      break;
    }
  }
};

down.onclick = () => {
  for (let i = 0; i < inputs.length - 1; i += 1) {
    if (inputs[i].classList.contains('selected')) {
      inputs[i].classList.remove('selected');
      inputs[i + 1].classList.add('selected');
      break;
    }
  }
};

remove.onclick = () => {
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].classList.contains('selected')) {
      inputs[i].classList.remove('selected');
      inputs[i].remove();
      inputs = document.querySelectorAll('.input');
      inputs[0].classList.add('selected');
      break;
    }
  }
};

move.onclick = () => {
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].classList.contains('selected')) {
      newOutput = document.createElement('p');
      newOutput.textContent = inputs[i].textContent;
      newOutput.setAttribute('class', 'input');
      outputBox.appendChild(newOutput);
      inputs[i].classList.remove('selected');
      inputs = document.querySelectorAll('.input');
      inputs[0].classList.add('selected');
      break;
    }
  }
};
