const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const { logger } = require('./util/logger');
const authRoutes = require('./routes/auth.routes');
const todoRoutes = require('./routes/todo.routes');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoutes);
app.use('/todo', todoRoutes);

// error handles
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, _) => {
  logger.error(err);
  res.status(400).json({ message: err.message });
});

module.exports = { app };
