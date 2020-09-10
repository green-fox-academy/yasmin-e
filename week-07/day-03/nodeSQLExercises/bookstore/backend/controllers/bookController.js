const express = require('express');
const conn = require('../database');

const router = express.Router();

router.get('/', (req, res) => {
  let sqlQuery = `SELECT book_mast.book_name as title, 
  author.aut_name as author, 
  category.cate_descrip as category, 
  publisher.pub_name as publisher, 
  book_mast.book_price as price 
  FROM book_mast 
  JOIN author ON author.aut_id = book_mast.aut_id 
  JOIN category ON category.cate_id=book_mast.cate_id 
  JOIN publisher ON publisher.pub_id=book_mast.pub_id`;

  const placeholders = [];

  if (Object.keys(req.query).length) {
    sqlQuery = `${sqlQuery} WHERE `;
  }

  if (req.query.category) {
    sqlQuery = `${sqlQuery} category.cate_descrip LIKE ?`;
    placeholders.push(req.query.category);
  }

  if (req.query.publisher) {
    sqlQuery = `${sqlQuery} publisher.pub_name LIKE ?`;
    placeholders.push(req.query.publisher);
  }

  conn.query(sqlQuery, placeholders, (error, result) => {
    if (error) {
      console.error(error.sqlMessage);
      res.sendStatus(500);
      return null;
    }
    return res.json(result);
  });
});

router.get('/category', (req, res) => {
  const sqlQuery = 'SELECT cate_descrip as category FROM category';

  conn.query(sqlQuery, (error, result) => {
    if (error) {
      console.error(error.sqlMessage);
      res.sendStatus(500);
      return null;
    }
    return res.json(result);
  });
});

module.exports = router;
