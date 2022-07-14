const express = require('express');
const { checkAuth } = require('../middleware/auth');
const todoCntrlr = require('../controller/todo.controller');

const routes = express.Router();
routes.use(checkAuth);

routes.route('/')
  .post(todoCntrlr.postTodoItem)
  .get(todoCntrlr.getAllTodoItems);

routes.route('/:id')
  .get(todoCntrlr.getTodoItem)
  .delete(todoCntrlr.deleteTodoItem)
  .patch(todoCntrlr.patchTodoItem);

module.exports = routes;
