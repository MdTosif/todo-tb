const { app } = require('./src/app');
const { connectdb } = require('./src/helper/db.helper');

connectdb().then(() => {
  app.listen(3000);
});
