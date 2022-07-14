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

exports.createTodoItem = async (item) => {
  console.log(item);
  const todoItem = await TodoItemModel.create(item);
  return todoItem;
};

exports.getTodoItemByUserId = async (userId) => {
  const todoItem = await TodoItemModel.find({ userId });
  return todoItem;
};

exports.deleteTodoItemById = async (id) => {
  const todoItem = await TodoItemModel.findByIdAndDelete(id);
  return todoItem;
};

exports.getTodoItemById = async (id) => {
  const todoItem = await TodoItemModel.findById(id);
  if (!todoItem) throw new Error('todo item with given details don\'t exist');
  return todoItem;
};

exports.updateTodoItem = async (id, item) => {
  const todoItem = await TodoItemModel.findByIdAndUpdate(id, item);
  return todoItem;
};
