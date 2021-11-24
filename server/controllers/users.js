const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../models/user');

usersRouter.get('/', async (request, response) => {
  const users = await User
    .find({});
  // .populate('blogs', { title: 1, url: 1,  likes: 1, author: 1 })

  response.send(response.json(users.map((u) => u)));

  response.json(users.map((u) => u));
});

usersRouter.post('/', async (request, response) => {
  const { username, name, password } = request.body;

  if (!password || password.length < 3) {
    return response.status(400).send({
      error: 'password is required and must be min. 3 in length',
    });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    name,
    passwordHash,
  });

  const savedUser = await user.save();

  return response.json(savedUser);
});

module.exports = usersRouter;
