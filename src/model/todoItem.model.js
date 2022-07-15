const mongoose = require('mongoose');

const TodoItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  time: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TodoItemModel = mongoose.model('TodoItem', TodoItemSchema);

const createTodoItem = async (item) => {
  const todoItem = await TodoItemModel.create(item);
  return todoItem;
};

const getTodoItemByUserId = async (userId) => {
  const todoItem = await TodoItemModel.find({ userId });
  return todoItem;
};

const deleteTodoItemById = async (id, userId) => {
  const todoItem = await TodoItemModel.findOneAndDelete({ _id: id, userId });
  if (!todoItem) throw new Error('todo item with given details don\'t exist');
  return todoItem;
};

const getTodoItemById = async (id, userId) => {
  const todoItem = await TodoItemModel.findOne({ _id: id, userId });
  if (!todoItem) throw new Error('todo item with given details don\'t exist');
  return todoItem;
};

const updateTodoItem = async (id, userId, item) => {
  const todoItem = await TodoItemModel
    .findOneAndUpdate({ _id: id, userId }, item, { new: true });
  if (!todoItem) throw new Error('todo item with given details don\'t exist');
  return todoItem;
};

module.exports = {
  createTodoItem, getTodoItemByUserId, getTodoItemById, deleteTodoItemById, updateTodoItem,
};
