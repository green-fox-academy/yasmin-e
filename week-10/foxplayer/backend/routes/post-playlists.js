const express = require('express');
const query = require('../data/database');

const postPlaylists = express.Router();

postPlaylists.post('/', async (req, res) => {
  try {
    const addPlaylist = 'INSERT INTO playlists (playlist) VALUES(?);';
    const playlistName = req.body.playlist;
    await query(addPlaylist, playlistName);

    const getPlaylists = 'SELECT * FROM playlists;';
    const playlists = await query(getPlaylists);

    res.status(200).json(playlists);
  } catch (err) {
    res.sendStatus(500);
  }
});

module.exports = postPlaylists;
