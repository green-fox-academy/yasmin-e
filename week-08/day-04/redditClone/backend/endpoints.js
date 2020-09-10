const express = require('express');
const conn = require('./database');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('working');
});

router.get('/posts', (req, res) => {
  res.header('Content-Type', 'application/json');

  const getPosts = 'SELECT * FROM posts';

  conn.query(getPosts, (err, posts) => {
    if (err) {
      console.error(err.sqlMessage);
      res.sendStatus(500); // internal server error
      return null;
    } return res.status(200).json({ posts });
  });
});

router.post('/posts', (req, res) => {
  res.header('Content-type', 'application/json');
  const newPost = req.body;

  const insertNewPost = `INSERT INTO posts (title, url) 
  VALUES (${newPost.title}, ${newPost.url})`;
  const getNewPost = `SELECT * FROM posts 
  WHERE posts.title=${newPost.title} AND posts.url=${newPost.url}`;

  conn.query(insertNewPost, (err1, result) => {
    if (err1) {
      console.error(err1.sqlMessage);
      res.sendStatus(500);
      return null;
    }

    conn.query(getNewPost, (err2) => {
      if (err2) {
        console.error(err2.sqlMessage);
        res.sendStatus(500);
        return null;
      }
      const newPostfromDB = result;
      return newPostfromDB;
    });

    return res.status(200).json(result);
  });
});

module.exports = router;
