/* eslint-disable no-unused-vars */
const express = require('express');
const query = require('../data/database');

const deleteApiQuestions = express.Router();

deleteApiQuestions.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const deleteQuestionSQL = 'DELETE FROM questions WHERE id=?;';
    const deleteQuestion = await query(deleteQuestionSQL, id);

    const deleteAnswersSQL = 'DELETE FROM answers WHERE question_id=?;';
    const deleteAnswers = await query(deleteAnswersSQL, id);

    res.status(200);

    console.log(`Question with id ${id} successfully deleted.`);
  } catch (err) {
    const { id } = req.params.id;
    res.sendStatus(500);
    console.log(`Question with id ${id} could not be deleted.`);
  }
});

module.exports = deleteApiQuestions;
