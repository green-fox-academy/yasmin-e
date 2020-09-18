const express = require('express');
const query = require('../data/database');

const getApiGame = express.Router();

getApiGame.get('/', async (req, res) => {
  try {
    const getRandomQuestion = 'SELECT * FROM questions ORDER BY RAND() LIMIT 1;';
    const randomQuestion = await query(getRandomQuestion);
    const question = randomQuestion[0];

    const getAnswers = 'SELECT answer, is_correct FROM answers WHERE question_id=?;';
    const questionId = randomQuestion[0].id;
    const answers = await query(getAnswers, questionId);

    const result = { question, answers };
    res.status(200).json(result);
  } catch (err) {
    res.sendStatus(500);
  }
});

module.exports = getApiGame;
