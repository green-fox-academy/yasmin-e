const express = require('express');
const query = require('../data/database');

const getPlaylists = express.Router();

getPlaylists.get('/', async (req, res) => {
  try {
    const getPlaylistsSQL = 'SELECT * FROM playlists;';
    const playlists = await query(getPlaylistsSQL);
    console.log(playlists);

    res.status(200).json(playlists);
  } catch (err) {
    res.sendStatus(500);
  }
});

module.exports = getPlaylists;
