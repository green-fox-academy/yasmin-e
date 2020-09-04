/* eslint-disable import/prefer-default-export */
/* eslint-disable no-dupe-keys */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
app.use('/img', express.static('img'));

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

const captions = [
  'Sunset is so marvelous that even the sun itself watches it every day in the reflections of the infinite oceans.',
  'A sunrise or sunset can be ablaze with brilliance and arouse all the passion, all the yearning, in the soul of the beholder.',
  'When I admire the wonders of a sunset or the beauty of the moon, my soul expands.',
  'A sunset is the sun’s fiery kiss to the night.',
  'Sunsets are proof that no matter what happens, every day can end beautifully.',
];
const imgFolder = 'static/imgs/';
const imgs = [];
module.exports = { imgs };

fs.readdir(imgFolder, (err, files) => {
  files.forEach((file, index) => {
    if (file[0] !== '.') {
      imgs.push({
        name: `Sunset number ${index}`,
        src: `${file}`,
        caption: `${captions[index - 1]}`,
      });
    }
  });
});

let imgIndex = 0;
module.exports = { imgIndex };

app.get('/', (req, res) => {
  const mainImg = { src: req.query.src };
  if (mainImg.src !== undefined) {
    imgIndex = imgs.map((file, index) => {
      if (file.src === mainImg.src) {
        return index;
      }
    }).filter((file) => file !== undefined);
  } else {
    imgIndex = 0;
  }
  res.render('home', {
    imgs, mainImg, imgIndex, captions,
  });
});
