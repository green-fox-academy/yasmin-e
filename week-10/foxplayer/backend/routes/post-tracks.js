const express = require('express');
const query = require('../data/database');

const postTracks = express.Router();

postTracks.post('/:playlist_id', (req, res) => {
  const { path } = req.body;
  const id = req.params.playlist_id;
  const addTrack = 'INSERT INTO tracks(path, playlist_id) VALUES(?,?);';
  query(addTrack, [path, id])
    .then((tracks) => res.status(200).json(tracks))
    .catch((error) => {
      res.sendStatus(500);
      console.log(error);
    });
});

module.exports = postTracks;
