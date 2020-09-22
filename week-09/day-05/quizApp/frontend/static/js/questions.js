/* eslint-disable no-param-reassign */
const backendUrl = 'http://localhost:3000';
const getQuestionsUrl = `${backendUrl}/api/questions`;

window.addEventListener('load', manageQuestions);

function manageQuestions() {
  fetch(getQuestionsUrl)
    .then((response) => response.json())
    .then((myJSON) => {
      console.log(myJSON);
      displayQuestionsAndButton(myJSON);
    });
}

function displayQuestionsAndButton(questionsArr) {
  const questionsDiv = document.querySelector('.questions-manager');
  questionsArr.forEach((question) => {
    const questionDiv = document.createElement('div');
    questionDiv.setAttribute('class', 'question-div');

    const questionEl = document.createElement('p');
    questionEl.textContent = question.question;
    questionEl.setAttribute('class', 'question');
    questionDiv.appendChild(questionEl);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.setAttribute('class', 'delete-button');
    handleDeleteButton(deleteButton, question.id, questionDiv);
    questionDiv.appendChild(deleteButton);

    questionsDiv.appendChild(questionDiv);
  });
}

function handleDeleteButton(deleteButton, id, questionDiv) {
  const deleteMethod = {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json' },
  };
  deleteButton.addEventListener('click', () => {
    fetch(`${backendUrl}/api/questions/${id}`, deleteMethod)
      .then((response) => response.json())
      .then(console.log);
    clearElement(questionDiv);
  });
}

function clearElement(el) {
  el.innerHTML = '';
}
