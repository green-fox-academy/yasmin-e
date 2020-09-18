const backendUrl = 'http://localhost:3000';
const getQuestionsUrl = `${backendUrl}/api/questions`;

window.addEventListener('load', manageQuestions);

function manageQuestions() {
  fetch(getQuestionsUrl)
    .then((response) => response.json())
    .then((myJSON) => {
      console.log(myJSON);
      displayQuestions(myJSON);
    });
}

function displayQuestions(questionsArr) {
  const questionsDiv = document.querySelector('.questions-manager');
  questionsArr.forEach((question) => {
    const questionDiv = document.createElement('div');
    questionDiv.setAttribute('value', `question_id:${question.id}`);

    const questionEl = document.createElement('p');
    questionEl.textContent = question.question;
    questionDiv.appendChild(questionEl);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    handleDeleteButton(deleteButton, question.id, questionDiv);
    questionDiv.appendChild(deleteButton);

    questionsDiv.appendChild(questionDiv);
  });
}

function handleDeleteButton(deleteButton, id, questionDiv) {
  const deleteMethod = { method: 'DELETE' };
  deleteButton.addEventListener('click', () => {
    fetch(`${backendUrl}/api/questions/:${id}`, deleteMethod)
      .then((response) => response.json())
      .then((response) => console.log(response));
    clearElement(questionDiv);
  });
}

function clearElement(el) {
  el.innerHTML = '';
}
