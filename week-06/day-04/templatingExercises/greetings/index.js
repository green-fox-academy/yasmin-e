/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Connecting through port ${port}`);
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const dataObj = req.query;
  if (dataObj.name.length === 0) {
    res.render('home', { title: 'Welcome Back, Guest!' });
  } else {
    res.render('home', { title: `Welcome Back, ${dataObj.name}!` });
  }
});
