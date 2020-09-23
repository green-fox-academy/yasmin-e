const express = require('express');
const query = require('../data/database');

const getAlias = express.Router();

getAlias.get('/:alias', async (req, res) => {
  const { alias } = req.params;

  try {
    const checkAlias = 'SELECT * FROM urlaliaser WHERE alias=?;';
    const result = await query(checkAlias, alias);
    const { url } = result;

    if (result.length === 0) {
      res.sendStatus(404);
    } else {
      const incrementHitCount = 'UPDATE urlapp.urlaliaser SET hitCount = hitCount + 1 WHERE alias=?;';
      await query(incrementHitCount, alias);
      res.sendStatus(200).redirect(url);
    }
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

module.exports = getAlias;
