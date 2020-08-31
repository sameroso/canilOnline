const express = require('express');
const app = express();
const CepCoords = require('coordenadas-do-cep');

app.get('/', (req, res) => {
  CepCoords.getByCep('36570043')
    .then((info) => {
      res.send(info);
    })
    .catch((err) => {
      res.send(error);
    });
});

app.listen(5000);
