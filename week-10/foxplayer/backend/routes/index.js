const express = require('express');
const getPlaylists = require('./get-playlists');
const postPlaylists = require('./post-playlists');
const deletePlaylists = require('./delete-playlists');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.use('/playlists', getPlaylists);
router.use('/playlists', postPlaylists);
router.use('/playlists', deletePlaylists);

module.exports = router;
