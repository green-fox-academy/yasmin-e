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
      received: Number(data.input),
      result: Number(data.input) * 2,
    });
  }
});

app.get('/greeter', (req, res) => {
  const data = req.query;
  if (data.name && data.title) {
    res.json({
      welcome_message: `Oh, hi there ${data.name}, my dear ${data.title}!`,
    });
  } else if (data.name) {
    res.status(400);
    res.json({
      error: 'Please provide a title!',
    });
  } else if (data.title) {
    res.status(400);
    res.json({
      error: 'Please provide a name!',
    });
  } else {
    res.status(400);
    res.json({
      error: 'Please provide a name and a title!',
    });
  }
});

app.get('/appenda', (req, res) => {
  console.log(req.query);
  res.json({
    ok: 'haha',
  });
});
