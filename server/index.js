require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());

const usersRouter = require('./controllers/users');

app.use('/api/users', usersRouter);

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
});

// Middleware that catches requests made to non-exisiting routes
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  } if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  }

  return next(error);
};

// this has to be the last loaded middleware.
app.use(errorHandler);

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
