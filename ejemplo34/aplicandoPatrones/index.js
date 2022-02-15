
/* 
Patrones aplicados:
    - Patron creacional: singleton
    - Patron de inyeccion de dependencias
    - Patron adaptador

*/
const express = require('express');
const parser = require('body-parser');

const services = require('./services/index.services');
const handlify = require('./handlers/index.handlers');

const usersHandler = handlify('users');

const app = express();

app.use(parser.urlencoded({ extended: false }));

app.use(parser.json());
const port = 3000;

app.get('/', usersHandler(services).get);
app.post('/', usersHandler(services).post);
app.put('/:id', usersHandler(services).put);
app.delete('/:id', usersHandler(services).delete);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

