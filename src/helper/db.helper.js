const mongoose = require('mongoose');
const { config } = require('../../config');
const { logger } = require('../util/logger');

mongoose.connection.on('close', () => {
  logger.info('db disconnected');
});

module.exports.connectdb = () => mongoose.connect(config.mongoURL);
module.exports.disconnectdb = () => mongoose.disconnect();
