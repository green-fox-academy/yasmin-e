const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Backend server running through port ${port}`);
});
