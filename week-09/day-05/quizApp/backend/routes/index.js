const express = require('express');
const getApiGame = require('./get-api-game');
const getApiQuestions = require('./get-api-questions');
const postApiQuestions = require('./post-api-questions');
const deleteApiQuestions = require('./delete-api-questions');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.use('/api/game', getApiGame);
router.use('/api/questions', getApiQuestions);
router.use('api/questions', postApiQuestions);
router.use('api/questions/:id', deleteApiQuestions);

module.exports = router;
