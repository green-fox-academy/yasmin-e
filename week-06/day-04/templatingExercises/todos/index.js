/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`connecting through port ${port}`);
});

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('home');
});
