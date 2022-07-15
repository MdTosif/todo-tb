const { config } = require('dotenv');

config({ path: `./.env.${process.env.NODE_ENV || 'development'}` });

exports.config = {
  mongoURL: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
};
