const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.static('static'));

app.listen(port, () => {
  console.log(`Frontend server running on port ${port}`);
});

app.get('/game', (req, res) => {
  res.sendFile(path.join('index.html'));
});

app.get('/questions', (req, res) => {
  res.sendFile(path.join('index.html'));
});
