/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const server = require('express');
const path = require('path');

const app = server();

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running through port ${port}`);
});

app.use('/assets', server.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});
