const mongoose = require('mongoose');
const { config } = require('../../config');

module.exports.connectdb = () => mongoose.connect(config.mongoURL);
module.exports.disconnectdb = () => mongoose.disconnect();
