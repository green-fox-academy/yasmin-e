const express = require('express');
const query = require('../data/database');

const getTracks = express.Router();

getTracks.get('/', (req, res) => {
  const sqlQuery = 'SELECT * FROM tracks;';
  query(sqlQuery)
    .then((tracks) => res.status(200).json(tracks))
    .catch((error) => {
      res.sendStauts(500);
      console.log(error);
    });
});

getTracks.get('/:playlist_id', (req, res) => {
  const sqlQuery = 'SELECT * FROM tracks WHERE playlist_id = ?;';
  query(sqlQuery, [req.params.playlist_id])
    .then((tracks) => res.status(200).json(tracks))
    .catch((error) => {
      res.sendStauts(500);
      console.log(error);
    });
});

module.exports = getTracks;
