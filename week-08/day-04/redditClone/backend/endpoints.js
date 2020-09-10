const express = require('express');
const path = require('path');
const conn = require('./database');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('working');
});

module.exports = router;
