const express = require('express');
const query = require('../data/database');

const getLinks = express.Router();

getLinks.get('/', (req, res) => {
  const getLinksSQL = 'SELECT id, url, alias, hitCount FROM urlaliaser;';
  query(getLinksSQL)
    .then((response) => res.status(200).json(response))
    .catch((error) => {
      res.sendStatus(500);
      console.log(error);
    });
});

module.exports = getLinks;
