const express = require('express');

const app = express();
const mongoose = require('mongoose');
const config = require('./utils/config');
const middleware = require('./utils/middleware');
// const notesRouter = require('./controllers/notes');
const logger = require('./utils/logger');
const usersRouter = require('./controllers/users');

app.post('/post', (req, res) => {
  console.log('Connected to React');
  res.redirect('/');
});

logger.info('connecting to', config.MONGODB_URI);

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
