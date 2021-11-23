const express = require('express');

const app = express();
const mongoose = require('mongoose');
const config = require('./utils/config');
const middleware = require('./utils/middleware');
// const notesRouter = require('./controllers/notes');
const logger = require('./utils/logger');
const usersRouter = require('./controllers/users');

logger.info('connecting to', config.MONGODB_URI);

console.log('uritesting in app: ', config.URI_TESTING === 'dippadai');

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message);
  });

// app.use(cors())
// app.use(express.static('build'))
app.use(express.json());

// app.use('/api/notes', notesRouter);
app.use('/api/users', usersRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
