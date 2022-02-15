/* 
    Patron de inyeccion de dependencia
    Se basa en entregar el control de los metodos que se van a ejecutar a una libreria que se inyectará
    Eliminar la mayor cantidad de require al inicio de la aplicacion
*/

/* 

----Sin aplicar inyeccion de dependencias---- 

const express = require('express')
const app = express();
const axios = require('axios');
const port = 3001;

app.get('/', async (req, res) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  console.table(data)
  res.send(data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
*/


const express = require('express')
const app = express();
const axios = require('axios');
const { get } = require('./handlers');
const port = 3001;

app.get('/', get(axios));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})