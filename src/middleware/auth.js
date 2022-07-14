const jwt = require('jsonwebtoken');
const { getUserById } = require('../model/user.model');

const checkAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const payload = jwt.verify(authorization, 'secret');
    req.user = await getUserById(payload.id);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { checkAuth };
