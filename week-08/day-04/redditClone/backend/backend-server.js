const express = require('express');
const cors = require('cors');
const endpoints = require('./endpoints');

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Backend server running through port ${port}`);
});

app.use(express.json());
app.use(cors());
app.use(endpoints);
