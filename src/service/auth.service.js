const jwt = require('jsonwebtoken');
const { compare, hash } = require('bcrypt');
const { createUser, getUserByEmail } = require('../model/user.model');

const login = async (req) => {
  const userData = req.body;
  const user = await getUserByEmail(userData.email, true);
  const validPass = await compare(userData.password, user.password);
  if (!validPass) throw new Error('invalid password or email');
  const token = jwt.sign({ id: user.id }, 'secret');
  return { user, token };
};

const signup = async (req) => {
  const userData = req.body;
  const password = await hash(userData.password, 10);
  await createUser({ ...userData, password });
};

module.exports = { login, signup };
