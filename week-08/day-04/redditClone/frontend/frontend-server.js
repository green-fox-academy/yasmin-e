const express = require('express');

const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Backend server running through port ${port}`);
});

app.use(express.static('static'));
