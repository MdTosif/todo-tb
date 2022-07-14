const mongoose = require('mongoose');

module.exports.connectdb = () => mongoose.connect('mongodb+srv://Tosif:tosif@cluster.pxxtp.mongodb.net/tutorbin');
module.exports.disconnectdb = () => mongoose.disconnect();
