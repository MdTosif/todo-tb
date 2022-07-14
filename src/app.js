const express = require('express');
const authRoutes = require('./routes/auth.routes');
const todoRoutes = require('./routes/todo.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoutes);
app.use('/todo', todoRoutes);

// error handles
app.use((err, req, res, _) => {
  console.log(err);
  res.status(400).json({ message: err.message });
});

module.exports = { app };
