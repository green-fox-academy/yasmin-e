const express = require('express');
const conn = require('./database');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('working');
});

router.get('/posts', (req, res) => {
  res.header('Content-Type', 'application/json');
  const sqlQuery = 'SELECT * FROM posts';
  conn.query(sqlQuery, (err, result) => {
    if (err) {
      console.error(err.sqlMessage);
      res.sendStatus(500); // internal server error
      return null;
    } return res.status(200).json({ posts: result });
  });
});

module.exports = router;
