const express = require('express');
const {
  createTodoItem, getTodoItemByUserId, getTodoItemById, deleteTodoItemById, updateTodoItem,
} = require('../model/todoItem.model');

const routes = express.Router();

routes.route('/')
  .post(async (req, res, next) => {
    try {
      const item = req.body;
      const savedTodoItem = await createTodoItem(item);
      res.json({ item: savedTodoItem });
    } catch (error) {
      next(error);
    }
  })
  .get(async (req, res, next) => {
    try {
      // const item = req.;
      const todoItem = await getTodoItemByUserId('62cfee699be4afc90c0ca858');
      res.json({ items: todoItem });
    } catch (error) {
      next(error);
    }
  });

routes.route('/:id')
  .get(async (req, res, next) => {
    try {
      const { id } = req.params;
      const todoItem = await getTodoItemById(id);
      res.json({ item: todoItem });
    } catch (error) {
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const { id } = req.params;
      const todoItem = await deleteTodoItemById(id);
      res.json({ message: 'item get deleted', item: todoItem });
    } catch (error) {
      next(error);
    }
  })
  .patch(async (req, res, next) => {
    try {
      const { id } = req.params;
      const item = req.body;
      const todoItem = await getTodoItemById(id);
      const updatedItem = await updateTodoItem(id, item);
      res.json({ item: updatedItem });
    } catch (error) {
      next(error);
    }
  });

module.exports = routes;
