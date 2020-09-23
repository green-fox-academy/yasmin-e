const express = require('express');
const postLinks = require('./post-links');
const getAlias = require('./get-alias');
const getLinks = require('./get-links');
const deleteLinks = require('./delete-links');

const router = express.Router();

router.use('/api/links', postLinks);
router.use('/a', getAlias);
router.use('/api/links', getLinks);
router.use('/api/links', deleteLinks);

module.exports = router;
