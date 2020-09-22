const express = require('express');

const port = 8080;

const app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(port, () => {
  console.log(`Frontend server running on port: ${port}`);
});
