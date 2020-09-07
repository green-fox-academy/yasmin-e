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

fs.readdir(imgFolder, (err, files) => {
  files.forEach((file, index) => {
    if (file[0] !== '.') {
      imgs.push({
        name: `Sunset number ${index}`,
        src: `${file}`,
        caption: `${captions[index]}`,
      });
    }
  });
});

let imgIndex = 0;
function getNextImageIndex(currentImageIndex, imgs) {
  const maxIndex = imgs.length - 1;
  let nextImageIndex = 0;
  const possibleNextImageIndex = currentImageIndex + 1;

  if (possibleNextImageIndex <= maxIndex) {
    nextImageIndex = possibleNextImageIndex;
  }

  return nextImageIndex;
}

app.get('/', (req, res) => {
  const mainImg = { src: req.query.src };
  if (mainImg.src !== undefined) {
    imgs.forEach((file, index) => {
      if (file.src === mainImg.src) {
        imgIndex = index;
      }
    });
  } else {
    imgIndex = 0;
  }
  const nextImageIndex = getNextImageIndex(imgIndex, imgs);
  res.render('home', {
    imgs,
    mainImg,
    imgFolder,
    imgIndex,
    captions,
    nextImageIndex,
  });
});
