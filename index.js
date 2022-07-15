const { app } = require('./src/app');
const { connectdb, disconnectdb } = require('./src/helper/db.helper');
const { logger } = require('./src/util/logger');

const PORT = process.env.PORT || 3000;
connectdb().then(() => {
  app.listen(PORT, () => {
    logger.info(`server started on http://localhost:${PORT}`);
  });
});

process.on('SIGTERM', async () => {
  await disconnectdb();
  logger.info('server getting close');
  process.exit(1);
});

process.on('SIGKILL', async () => {
  await disconnectdb();
  logger.info('server getting close');
  process.exit(1);
});

process.on('SIGINT', async () => {
  await disconnectdb();
  logger.info('server getting close');
  process.exit(1);
});

module.exports = app;
