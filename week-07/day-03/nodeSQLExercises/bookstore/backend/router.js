'use strict';

const bookController = require('./controllers/bookController');

const route = (app) => {
  app.use('/book', bookController);
};

module.exports = { route };
