const express = require('express');
const query = require('../data/database');

const postLinks = express.Router();

postLinks.post('/', async (req, res) => {
  const { alias } = req.body;
  const { url } = req.body;
  console.log(url, alias);

  const checkAlias = 'SELECT * FROM urlaliaser WHERE alias=?;';
  const result = await query(checkAlias, alias);

  if (result.length === 0) {
    const secretCode = Math.floor(1000 + Math.random() * 9000);
    const addLink = 'INSERT INTO urlaliaser(url, alias, secretCode) VALUES(?, ?, ?);';

    await query(addLink, [url, alias, secretCode]);

    const getNewLink = 'SELECT * FROM urlaliaser WHERE alias=?;';
    await query(getNewLink, alias)
      .then((response) => res.status(200).json(response[0]))
      .catch((error) => {
        res.sendStatus(500);
        console.log(error);
      });
  } else {
    res.sendStatus(400);
  }
});

module.exports = postLinks;
