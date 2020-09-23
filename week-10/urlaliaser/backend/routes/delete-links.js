const express = require('express');
const query = require('../data/database');

const deleteLinks = express.Router();

deleteLinks.delete('/:id', async (req, res) => {
  const { secretCode } = req.body;
  const { id } = req.params;

  const deleteLink = 'DELETE FROM urlaliaser WHERE id=? AND secretCode=?;';
  const selectAll = 'SELECT id, secretCode from urlaliaser;';
  try {
    const allLinks = await query(selectAll);
    let idExists = false;
    let codeExists = false;

    allLinks.forEach((link) => {
      if (link.id === Number(id) && link.secretCode === Number(secretCode)) {
        idExists = true;
        codeExists = true;
      } else if (link.id === Number(id)) {
        idExists = true;
      } else if (link.secretCode === Number(secretCode)) {
        codeExists = true;
      }
    });

    if (idExists === false) {
      res.sendStatus(404);
    } else if (idExists === true && codeExists === false) {
      res.sendStatus(403);
    } else if (idExists === true && codeExists === true) {
      await query(deleteLink, [id, secretCode]);
      res.sendStatus(402);
    }
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
});

module.exports = deleteLinks;
