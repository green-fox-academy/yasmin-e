/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');

const app = express();

const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // render `home.ejs`
  /* res.render('home'); */
  res.render('home', {
    title: 'Hello Yasmine',
  });
});

// start express app on port 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
