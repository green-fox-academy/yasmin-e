const express = require('express');
const query = require('../data/database');

const postPlaylists = express.Router();

postPlaylists.post('/', async (req, res) => {
  try {
    const addPlaylistSQL = 'INSERT INTO playlists (playlist) VALUES(?);';
    const playlistName = req.body.playlist;
    const addPlaylist = await query(addPlaylistSQL, playlistName);

    const getPlaylistsSQL = 'SELECT * FROM playlists;';
    const playlists = await query(getPlaylistsSQL);

    res.status(200).json(playlists);
  } catch (err) {
    res.sendStatus(500);
  }
});

module.exports = postPlaylists;
