const express = require('express');
const query = require('../data/database');

const getPlaylists = express.Router();

getPlaylists.get('/', (req, res) => {
  const getPlaylistsSQL = 'SELECT * FROM playlists;';
  query(getPlaylistsSQL)
    .then((playlists) => res.status(200).json(playlists))
    .catch((error) => {
      res.sendStatus(500);
      console.log(error);
    });
});

module.exports = getPlaylists;
