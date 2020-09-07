/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const jsonParser = bodyParser.json();

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`The server is up and running on port ${port}`);
});

app.get('/doubling', (req, res) => {
  const data = req.query;
  if (data.input === undefined) {
    res.json({
      error: 'Please provide an input!',
    });
  } else {
    res.json({
      received: Number(data.input),
      result: Number(data.input) * 2,
    });
  }
});

app.get('/greeter', (req, res) => {
  const data = req.query;
  if (data.name && data.title) {
    res.json({
      welcome_message: `Oh, hi there ${data.name}, my dear ${data.title}!`,
    });
  } else if (data.name === undefined && data.title === undefined) {
    res.status(400);
    res.json({
      error: 'Please provide a name and a title!',
    });
  } else if (data.title === undefined) {
    res.status(400);
    res.json({
      error: 'Please provide a title!',
    });
  } else if (data.name === undefined) {
    res.status(400);
    res.json({
      error: 'Please provide a name!',
    });
  }
});

app.get('/appenda/:word', (req, res) => {
  const appendable = req.params.word;
  res.json({
    appended: `${appendable}a`,
  });
});

function sum(value) {
  let result = 0;
  for (let i = 1; i <= value; i += 1) {
    result += i;
  }
  return result;
}

function factor(value) {
  let result = 1;
  for (let i = value; i > 0; i -= 1) {
    result *= i;
  }
  return result;
}

app.post('/dountil/:action', jsonParser, (req, res) => {
  const action = req.params.action;
  const until = req.body.until;
  console.log(until);
  console.log(action);
  if (until === undefined) {
    res.json({ error: 'Please provide a number!' });
  } else if (action === 'sum') {
    const result = sum(until);
    res.json({ result });
  } else if (action === 'factor') {
    const result = factor(until);
    res.json({ result });
  }
});

app.post('/arrays', jsonParser, (req, res) => {
  const what = req.body.what;
  const numbers = req.body.numbers;
  if (what === undefined && numbers === undefined) {
    res.json({
      error: 'Please provide the numbers and what to do with them!',
    });
  } else if (numbers === undefined) {
    res.json({
      error: 'Please provide the numbers!',
    });
  } else if (what === undefined) {
    res.json({
      error: 'Please provide what to do with the numbers!',
    });
  } else if (what === 'sum' && numbers.length > 0) {
    const result = numbers.reduce((a, b) => a + b);
    res.json({ result });
  } else if (what === 'multiply' && numbers.length > 0) {
    const result = numbers.reduce((a, b) => a * b);
    res.json({ result });
  } else if (what === 'double' && numbers.length > 0) {
    const result = numbers.map((number) => number * 2);
    res.json({ result });
  }
});

app.post('/sith', jsonParser, (req, res) => {
  const text = req.body.text;
  console.log(text);
  if (text === undefined || text.length === 0) {
    res.json({ error: 'Feed me some text you have to, padawan young you are. Hmmm.' });
  } else {
    const result = text;
    res.json({ sith_text: result });
  }
});

app.post('/translate', jsonParser, (req, res) => {
  const text = req.body.text;
  const lang = req.body.lang;
  if (text !== undefined && lang !== undefined) {
    const result = text;
    res.json({
      translated: result,
      lang: 'teve',
    });
  } else {
    res.json({ error: 'I can\'t translate that!' });
  }
});
