const todoSrvc = require('../service/todo.service');

const postTodoItem = async (req, res, next) => {
  try {
    const response = await todoSrvc.postTodoItem(req);
    res.json(response);
  } catch (error) {
    next(error);
  }
};
const getAllTodoItems = async (req, res, next) => {
  try {
    const response = await todoSrvc.getAllTodoItems(req);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const getTodoItem = async (req, res, next) => {
  try {
    const response = await todoSrvc.getTodoItem(req);
    res.json(response);
  } catch (error) {
    next(error);
  }
};
const deleteTodoItem = async (req, res, next) => {
  try {
    const response = await todoSrvc.deleteTodoItem(req);
    res.json(response);
  } catch (error) {
    next(error);
  }
};
const patchTodoItem = async (req, res, next) => {
  try {
    const response = await todoSrvc.patchTodoItem(req);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postTodoItem, getAllTodoItems, getTodoItem, patchTodoItem, deleteTodoItem,
};
