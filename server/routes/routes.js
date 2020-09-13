const addressControler = require('../controllers/addressControler');

module.exports = (app) => {
  app.post('/api/getAddress', addressControler.queryAddress);
};
