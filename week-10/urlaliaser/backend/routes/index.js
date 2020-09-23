const express = require('express');
const cors = require('cors');
const postLinks = require('./post-links');

const router = express.Router();

router.use(cors());
router.use('/', postLinks);

module.exports = router;
