const express = require('express');
const cors = require('cors');
const router = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
