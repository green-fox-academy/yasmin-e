/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Hi');
});
