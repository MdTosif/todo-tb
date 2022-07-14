const express = require('express');
const userCntrlr = require('../controller/auth.controller');

const routes = express.Router();

routes.post('/signup', userCntrlr.signup, userCntrlr.login);

routes.post('/login', userCntrlr.login);

module.exports = routes;
