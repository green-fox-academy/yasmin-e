'use strict';

const express = require('express');
const router = require('./router');
const cors = require ('cors');

const app = express();
const port = 3000;

app.use(cors());
router.route(app);

app.listen(port, () => console.log(`Backend server is running at ${port}`));
