const backendUrl = 'http://localhost:3000';
const getGameUrl = `${backendUrl}/api/game`;
// const getQuestionsUrl = `${backendUrl}/api/questions`;

const questionDiv = document.querySelector('.question');
const answersDiv = document.querySelector('.answers');

function getGame() {
  fetch(getGameUrl)
    .then((response) => response.json())
    .then((myJSON) => {
      const { question } = myJSON.question;
      const questionTxt = document.createElement('p');

      questionTxt.textContent = question;
      questionDiv.appendChild(questionTxt);

      const answersArr = myJSON.answers;
      answersArr.forEach((item) => {
        const answerButton = document.createElement('button');
        answerButton.textContent = item.answer;
        answerButton.setAttribute('value', `${item.is_correct}`);
        answersDiv.appendChild(answerButton);
      });
    });
}

window.addEventListener('load', getGame);
