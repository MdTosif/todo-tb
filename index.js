const { app } = require('./src/app');
const { connectdb, disconnectdb } = require('./src/helper/db.helper');

connectdb().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log('server started');
  });
  app.on('close', () => {
    console.log('server closed');
    disconnectdb();
  });
});

module.exports = app;
