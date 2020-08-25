let pageBody = document.querySelector('body');
let container = document.createElement('div');
container.setAttribute('class', 'container');
pageBody.appendChild(container);

let inputBox = document.createElement('div');
inputBox.setAttribute('class', 'inputBox');

let inputArr = ['bread', 'milk', 'orange', 'tomato'];
inputArr.forEach((input) => {
 let newInput = document.createElement('p');
 newInput.textContent = input;
 newInput.setAttribute('class', 'input');
 inputBox.appendChild(newInput);
});

let buttonsBox = document.createElement('div');
buttonsBox.setAttribute('class', 'buttonsBox');

let buttonsArr = ['Up', '>', 'X', 'Down'];
buttonsArr.forEach((button) => {
 let newButton = document.createElement('button');
 newButton.textContent = button;
 newButton.setAttribute('class', 'button');
 buttonsBox.appendChild(newButton);
});


let outputBox = document.createElement('div');
outputBox.setAttribute('class', 'inputBox');

container.appendChild(inputBox);
container.appendChild(buttonsBox);
container.appendChild(outputBox);

let inputs = document.querySelectorAll('.input');
inputs[0].classList.add('selected');

let buttons = document.querySelectorAll('button');
let up = buttons[0];
let down = buttons[3];
let move = buttons[1];
let remove = buttons[2];

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
   inputs[0].classList.add('selected');
   break;
  }
 }
}

move.onclick = () => {
 for (let i = 0; i < inputs.length; i += 1) {
  if (inputs[i].classList.contains('selected')) {
   newOutput = document.createElement('p');
   newOutput.textContent = inputs[i].textContent;
   newOutput.setAttribute('class', 'input');
   outputBox.appendChild(newOutput);
   inputs[i].classList.remove('selected');
   inputs[0].classList.add('selected');
   break;
  }
 }
}
