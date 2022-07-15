const todoSrvc = require('../service/todo.service');

const postTodoItem = async (req, res, next) => {
  try {
    const response = todoSrvc.postTodoItem(req);
    res.json(response);
  } catch (error) {
    next(error);
  }
};
const getAllTodoItems = async (req, res, next) => {
  try {
    const response = todoSrvc.getAllTodoItems(req);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const getTodoItem = async (req, res, next) => {
  try {
    const response = todoSrvc.getTodoItem(req);
    res.json(response);
  } catch (error) {
    next(error);
  }
};
const deleteTodoItem = async (req, res, next) => {
  try {
    const response = todoSrvc.deleteTodoItem(req);
    res.json(response);
  } catch (error) {
    next(error);
  }
};
const patchTodoItem = async (req, res, next) => {
  try {
    const response = todoSrvc.patchTodoItem(req);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postTodoItem, getAllTodoItems, getTodoItem, patchTodoItem, deleteTodoItem,
};
