const mongoose = require('mongoose');
const supertest = require('supertest');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const helper = require('./test_helper');
const app = require('../app');
const config = require('../utils/config');

const api = supertest(app);
console.log(mongoose.connection.readyState);
console.log('uritesting: ', config.URI_TESTING);

describe('when there is initially one user in db', () => {
  beforeEach(async () => {
    console.log(mongoose.connection.readyState);
    await User.deleteMany({});
    console.log(mongoose.connection.readyState);
    const passwordHash = await bcrypt.hash('sekret', 10);
    const user = new User({ username: 'root', name: 'Ruut Ruutana', passwordHash });

    await user.save();
  });

  afterEach(() => {
    mongoose.connection.close();
  });

  test('creation succeeds with a fresh username', async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: 'oljuboi',
      name: 'Olli Sorvali',
      password: 'salainen',
    };

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1);

    const usernames = usersAtEnd.map((u) => u.username);
    expect(usernames).toContain(newUser.username);
  });
});
