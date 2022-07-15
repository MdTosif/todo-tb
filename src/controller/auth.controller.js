const authSrvc = require('../service/auth.service');

const login = async (req, res, next) => {
  try {
    const response = await authSrvc.login(req);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const signup = async (req, res, next) => {
  try {
    await authSrvc.signup(req);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { login, signup };
