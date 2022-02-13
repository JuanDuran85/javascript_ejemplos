const axios = require("axios");

/* El patrón módulo revelador está compuesto por un IIFE y dentro del cual se definen las constantes privadas y se retorna lo que se desea que sea accesible por el desarrollador */

// ejemplo 1

const resultado = (() => {
  // x sera la variable privada
  const x = {};
  return {
    a: () => console.info(x),
    b: (key, value) => (x[key] = value),
  };
})();

resultado.a();
resultado.b("nombre", "juan");
resultado.a();

// ejemplo 2
// se creara un modulo para guardar datos de usuarios y otro modulo para productos

const postInfo = (() => {
  const recursos = "https://jsonplaceholder.typicode.com/posts";
  const dataToPost = {
    title: "foo",
    body: "bar",
    userId: 1,
  };
  return {
    listar: async () => {
      try {
        const response = await axios.get(recursos);
        console.info(response.data);
        return response;
      } catch (error) {
        console.error(error);
      }
    },
    crear: async () => {
      try {
          const response = await axios.post(recursos, JSON.stringify(dataToPost));
          console.info(response.data);
          return response;
      } catch (error) {
          console.error(error);
      }
    },
  };
})();

postInfo.listar();
postInfo.crear();