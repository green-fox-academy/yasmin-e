const express = require('express');
const conn = require('./database');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('working');
});

//  list all posts
router.get('/posts', (req, res) => {
  res.header('Content-Type', 'application/json');

  const getPosts = 'SELECT id, title, url, DATE_FORMAT(publication_time, \'%Y-%m-%d\') date, DATE_FORMAT(publication_time, \'%H:%i:%s\') time, score FROM posts;';

  conn.query(getPosts, (err, posts) => {
    if (err) {
      console.error(err.sqlMessage);
      res.sendStatus(500); // internal server error
      return null;
    } return res.status(200).json({ posts }); 
  });
});

//  add a new post
router.post('/posts', (req, res) => {
  res.header('Content-Type', 'application/json');
  if (req.accepts('application/json') === false) {
    res.status(406);
    console.error('Request not acceptable');
  }

  const newPost = req.body;

  const insertNewPost = 'INSERT INTO posts (title, url) VALUES (?, ?);';
  const getNewPost = 'SELECT * FROM posts WHERE posts.title=? AND posts.url=?;';

  conn.query(insertNewPost, [newPost.title, newPost.url], (err1) => {
    if (err1) {
      console.error(err1.sqlMessage);
      res.sendStatus(500);
    }

    conn.query(getNewPost, [newPost.title, newPost.url], (err2, posted) => {
      if (err2) {
        console.error(err2.sqlMessage);
        res.sendStatus(500);
      }
      res.status(200).json(posted);
    });
  });
});

//  upvote a post
router.put('/posts/:id/upvote', (req, res) => {
  res.header('Content-Type', 'application/json');
  if (req.accepts('application/json') === false) {
    res.status(406);
    console.error('Request not acceptable');
  }

  const postId = req.params.id;
  const upvotePost = 'UPDATE posts SET score = score + 1 WHERE id = ?;';
  const getPost = 'SELECT * FROM posts WHERE id = ?;';

  conn.query(upvotePost, [postId], (err1) => {
    if (err1) {
      console.error(err1.sqlMessage);
      res.sendStatus(500);
    }

    conn.query(getPost, [postId], (err2, result) => {
      if (err2) {
        console.error(err2.sqlMessage);
        res.sendStatus(500);
      }
      res.status(200).json(result);
    });
  });
});

//  downvote a post
router.put('/posts/:id/downvote', (req, res) => {
  res.header('Content-Type', 'application/json');
  if (req.accepts('application/json') === false) {
    res.status(406);
    console.error('Request not acceptable');
  }

  const postId = req.params.id;
  const downvotePost = 'UPDATE posts SET score = score - 1 WHERE id = ?;';
  const getPost = 'SELECT * FROM posts WHERE id = ?;';

  conn.query(downvotePost, [postId], (err1) => {
    if (err1) {
      console.error(err1.sqlMessage);
      res.sendStatus(500);
    }

    conn.query(getPost, [postId], (err2, result) => {
      if (err2) {
        console.error(err2.sqlMessage);
        res.sendStatus(500);
      }
      res.status(200).json(result);
    });
  });
});

module.exports = router;
