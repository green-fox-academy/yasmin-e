const express = require('express');
const query = require('../data/database');

const getApiQuestions = express.Router();

getApiQuestions.get('/', async (req, res) => {
  try {
    const getQuestions = 'SELECT * FROM questions;';
    const questions = await query(getQuestions);

    res.status(200).json(questions);
  } catch (err) {
    res.sendStatus(500);
  }
});

module.exports = getApiQuestions;
