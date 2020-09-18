/* eslint-disable no-unused-vars */
const express = require('express');
const query = require('../data/database');

const deleteApiQuestions = express.Router();

deleteApiQuestions.delete('/', async (req, res) => {
  try {
    const { id } = req.body;
    const deleteQuestionSQL = 'DELETE FROM questions WHERE id=?;';
    const deleteQuestion = await query(deleteQuestionSQL, id);

    const deleteAnswersSQL = 'DELETE FROM answers WHERE question_id=?;';
    const deleteAnswers = await query(deleteAnswersSQL, id);

    res.status(200);
    console.log(`Question with id ${id} successfully deleted.`);
  } catch (err) {
    res.sendStatus(500);
  }
});

module.exports = deleteApiQuestions;
