const lessonsRouter = require('express').Router();
const Lesson = require('../models/lesson');

lessonsRouter.get('/', async (request, response) => {
  const lessons = await Lesson.find({});

  response.json(lessons);
});

lessonsRouter.post('/', async (request, response) => {
  const lesson = new Lesson(request.body);

  const savedLesson = await lesson.save();

  response.status(201).json(savedLesson);
});

module.exports = lessonsRouter;
