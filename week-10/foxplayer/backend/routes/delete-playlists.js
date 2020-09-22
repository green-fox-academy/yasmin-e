const express = require('express');
const query = require('../data/database');

const deletePlaylists = express.Router();

deletePlaylists.delete('/:id', async (req, res) => {
  try {
    const deletePlaylistSQL = 'DELETE FROM playlists WHERE id=? AND system_=0;';
    const { id } = req.params;
    const deletePlaylist = await query(deletePlaylistSQL, id);

    res.status(200).json({ Success: `Playlist with id ${id} deleted` });
  } catch (err) {
    res.status(500).json({ Error: 'Id not present or not enumerable' });
  }
});

module.exports = deletePlaylists;
