const { compare, hash } = require('bcrypt');
const express = require('express');
const jwt = require('jsonwebtoken');
const { connectdb } = require('./db.helper');
const { createUser, getUserByEmail } = require('./model/user.model');

const login = async (req, res, next) => {
  try {
    const userData = req.body;
    const user = await getUserByEmail(userData.email, true);
    const validPass = await compare(userData.password, user.password);
    if (!validPass) throw new Error('invalid password or email');
    const token = jwt.sign({ id: user.id }, 'secret');
    res.json({ user, token });
  } catch (error) {
    next(error);
  }
};

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/auth/signup', async (req, res, next) => {
  try {
    const userData = req.body;
    const password = await hash(userData.password, 10);
    await createUser({ ...userData, password });
    next();
  } catch (error) {
    next(error);
  }
}, login);

app.post('/auth/login', login);

// error handles
app.use((err, req, res, _) => {
  res.status(400).json({ message: err.message });
});

connectdb().then(() => {
  app.listen(3000);
});
