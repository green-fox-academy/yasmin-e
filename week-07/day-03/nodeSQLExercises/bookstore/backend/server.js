/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');

const router = express();
const port = 3000;

router.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
