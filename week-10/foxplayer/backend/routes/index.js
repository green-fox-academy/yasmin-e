const express = require('express');
const getPlaylists = require('./get-playlists');
const postPlaylists = require('./post-playlists');
const deletePlaylists = require('./delete-playlists');
const getTracks = require('./get-tracks');
const postTracks = require('./post-tracks');
const deleteTracks = require('./delete-tracks');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.use('/playlists', getPlaylists);
router.use('/playlists', postPlaylists);
router.use('/playlists', deletePlaylists);
router.use('/playlist-tracks', getTracks);
router.use('/playlist-tracks', postTracks);
router.use('/playlist-tracks', deleteTracks);

module.exports = router;
