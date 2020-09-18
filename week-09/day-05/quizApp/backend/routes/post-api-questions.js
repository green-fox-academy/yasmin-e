const express = require('express');
const query = require('../data/database');

const postApiQuestions = express.Router();

postApiQuestions.post('/', async (req, res) => {
  try {
    const insertQuestionSQL = 'INSERT INTO questions (question) VALUES (\'?\');';
    const insertQuestion = await query(insertQuestionSQL);

    const insertAnswersSQL = 'INSERT INTO answers (answer, is_correct, question_id) VALUES (\'?\', ?, ?);';
    const insertAnswers = await query(insertAnswersSQL);

    const getNewQuestion = 'SELECT * FROM questions where id=?';
    const newQuestion = await query(getNewQuestion);

    const getNewAnswers = 'SELECT answer, is_correct FROM answers WHERE question_id=?;';
    const newAnswers = await query(getNewAnswers);

    const result = { question: newQuestion, answers: newAnswers };
    res.status(200).json(result);
  } catch (err) {
    res.sendStatus(500);
  }
});

module.exports = postApiQuestions;
