const express = require('express');
const query = require('../data/database');

const deleteTracks = express.Router();

deleteTracks.delete('/:playlist_id/:track_id', (req, res) => {
  const trackId = req.params.track_id;
  const playlistId = req.params.playlist_id;
  const deleteTrack = 'DELETE FROM tracks WHERE playlist_id=? and id=?;';
  query(deleteTrack, [playlistId, trackId])
    .then(() => res.status(200).json(`Track with id ${trackId} was susccessfully deleted from playlist with id ${playlistId}`))
    .catch((error) => {
      res.json('Error: the track was not deleted');
      console.log(error);
    });
});

module.exports = deleteTracks;
