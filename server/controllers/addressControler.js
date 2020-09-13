const CepCoords = require('coordenadas-do-cep');

module.exports = {
  queryAddress(req, res) {
    CepCoords.getByCep(req.body.cep)
      .then((info) => {
        res.send(info);
      })
      .catch((err) => {
        res.send(err);
      });
  },
};
