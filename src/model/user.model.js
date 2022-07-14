const mongoose = require('mongoose');

/**
 * User Schema
 */
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
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

const UserModel = mongoose.model('User', UserSchema);

const getUserByEmail = (email, selectAll = false) => {
  if (selectAll) return UserModel.findOne({ email }).exec();
  return UserModel.findOne({ email }).select('+email').exec();
};

const getUserById = (id) => {
  const user = UserModel.findById(id).exec();
  if (!user) throw new Error('user exist with this email');
  return user;
};

const createUser = async (userData) => {
  const existUser = await getUserByEmail(userData.email);
  if (existUser) throw new Error('user exist with this email');
  const newUser = await UserModel.create(userData);
  return newUser;
};

module.exports = { createUser, getUserByEmail, getUserById };
