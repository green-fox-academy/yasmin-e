/* eslint-disable no-unused-vars */
const express = require('express');
const query = require('../data/database');

const deletePlaylists = express.Router();

deletePlaylists.delete('/:id', (req, res) => {
  const deletePlaylist = 'DELETE FROM playlists WHERE id=? AND system_=0;';
  const { id } = req.params;
  query(deletePlaylist, id)
    .then(res.status(200).json({ Success: `Playlist with id ${id} deleted` }))
    .catch(res.status(500).json({ Error: 'Id not present or not enumerable' }));
});

module.exports = deletePlaylists;
