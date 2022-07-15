const {
  createTodoItem, getTodoItemByUserId, getTodoItemById, deleteTodoItemById, updateTodoItem,
} = require('../model/todoItem.model');

const postTodoItem = async (req) => {
  const item = req.body;
  item.userId = req.user.id;
  const savedTodoItem = await createTodoItem(item);
  return { item: savedTodoItem };
};

const getAllTodoItems = async (req) => {
  const userId = req.user.id;
  const todoItem = await getTodoItemByUserId(userId);
  return { items: todoItem };
};

const getTodoItem = async (req) => {
  const { id } = req.params;
  const userId = req.user.id;
  const todoItem = await getTodoItemById(id, userId);
  return { item: todoItem };
};

const deleteTodoItem = async (req) => {
  const { id } = req.params;
  const userId = req.user.id;
  const todoItem = await deleteTodoItemById(id, userId);
  return { message: 'item get deleted', item: todoItem };
};

const patchTodoItem = async (req) => {
  const { id } = req.params;
  const userId = req.user.id;
  const item = req.body;
  const updatedItem = await updateTodoItem(id, userId, item);
  return { item: updatedItem };
};

module.exports = {
  postTodoItem, getAllTodoItems, getTodoItem, patchTodoItem, deleteTodoItem,
};
