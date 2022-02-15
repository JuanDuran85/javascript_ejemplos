
/* 
Patrones aplicados:
    - Patron creacional: singleton
    - Patron de inyeccion de dependencias
    - Patron adaptador

*/
const express = require('express');
const services = require('./services/index.services');
const handlers = require('./handlers/index.handlers');
const app = express();
const port = 3000;

app.get('/', handlers(services).get);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

