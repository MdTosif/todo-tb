const {
  createTodoItem, getTodoItemByUserId, getTodoItemById, deleteTodoItemById, updateTodoItem,
} = require('../model/todoItem.model');

const postTodoItem = async (req, res, next) => {
  try {
    const item = req.body;
    item.userId = req.user.id;
    const savedTodoItem = await createTodoItem(item);
    res.json({ item: savedTodoItem });
  } catch (error) {
    next(error);
  }
};
const getAllTodoItems = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const todoItem = await getTodoItemByUserId(userId);
    res.json({ items: todoItem });
  } catch (error) {
    next(error);
  }
};

const getTodoItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const todoItem = await getTodoItemById(id, userId);
    res.json({ item: todoItem });
  } catch (error) {
    next(error);
  }
};
const deleteTodoItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const todoItem = await deleteTodoItemById(id, userId);
    res.json({ message: 'item get deleted', item: todoItem });
  } catch (error) {
    next(error);
  }
};
const patchTodoItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const item = req.body;
    const updatedItem = await updateTodoItem(id, userId, item);
    res.json({ item: updatedItem });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postTodoItem, getAllTodoItems, getTodoItem, patchTodoItem, deleteTodoItem,
};
