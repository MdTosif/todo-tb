const jwt = require('jsonwebtoken');
const { compare, hash } = require('bcrypt');
const { createUser, getUserByEmail } = require('../model/user.model');

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

const signup = async (req, res, next) => {
  try {
    const userData = req.body;
    const password = await hash(userData.password, 10);
    await createUser({ ...userData, password });
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { login, signup };
