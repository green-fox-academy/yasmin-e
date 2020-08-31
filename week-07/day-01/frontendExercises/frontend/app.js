/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`The server is up and running on ${port}`);
});

app.get('/doubling', (req, res) => {
  const data = req.query;
  if (data.input === undefined) {
    res.json({
      error: 'Please provide an input!',
    });
  } else {
    res.json({
      recieved: data.input,
      result: data.input * 2,
    });
  }
});
