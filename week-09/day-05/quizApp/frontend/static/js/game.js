/* eslint-disable no-param-reassign */
const backendUrl = 'http://localhost:3000';
const getGameUrl = `${backendUrl}/api/game`;

window.addEventListener('load', startGame);

function startGame() {
  fetch(getGameUrl)
    .then((response) => response.json())
    .then((myJSON) => {
      clearEverything();
      const { question } = myJSON.question;
      displayQuestion(question);

      const answersArr = myJSON.answers;
      displayAnswers(answersArr);

      const answerButtons = document.querySelectorAll('.answer-button');
      handleAnswerButtons(answerButtons);
    });
}

function displayQuestion(data) {
  const questionDiv = document.querySelector('.question');
  const questionTxt = document.createElement('p');
  questionTxt.textContent = data;
  questionDiv.appendChild(questionTxt);
}

function displayAnswers(dataArr) {
  const answersDiv = document.querySelector('.answers');
  dataArr.forEach((item) => {
    const answerButton = document.createElement('button');
    answerButton.setAttribute('class', 'answer-button');
    answerButton.dataset.is_correct = `${item.is_correct}`;
    answerButton.textContent = item.answer;
    answersDiv.appendChild(answerButton);
  });
}

function clearEverything() {
  const question = document.querySelector('.question');
  question.innerHTML = '';

  const answersDiv = document.querySelector('.answers');
  answersDiv.innerHTML = '';
}
function increaseScore() {
  const scoreEl = document.getElementById('score');
  let score = Number(document.getElementById('score').innerHTML);
  score += 1;
  scoreEl.innerHTML = score;
}

function handleAnswerButtons(answerButtons) {
  answerButtons.forEach((button) => {
    handleAnswerButton(button, answerButtons);
  });
}

function handleAnswerButton(button, answerButtons) {
  button.addEventListener('click', (event) => {
    const currentButton = event.target;
    if (currentButton.disabled === false) {
      if (currentButton.dataset.is_correct === '1') {
        currentButton.style.backgroundColor = '#2EB00E';
        increaseScore();
      } else {
        currentButton.style.backgroundColor = '#B03F0E';
      }
      currentButton.dataset.clicked = true;
      disableRemainingButtons(answerButtons);
      startOver();
    }
  });
}

function disableRemainingButtons(buttons) {
  buttons.forEach((button) => {
    if (button.dataset.clicked === undefined) {
      button.disabled = true;
    }
  });
}

const startOver = () => {
  setTimeout(startGame, 2000);
};
