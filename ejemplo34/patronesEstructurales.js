/* Los patrones estructurales entregan interfaz sencilla o una forma de comunicar dos estructuras distintas de una manera más simple */

const https = require("https");
const axios = require("axios");

/* 

    Sin Patron  Facade

const https = require('https');
const options = {
    hostname: 'reqres.in',
    path: '/api/users?per_page=12',
    method: 'GET',
};

const req = https.request(options, res => {
    res.setEncoding('utf8');
    let body = '';
    res.on('data', data => {
        body += data;
    });
    res.on('end', data =>{
        const parsed = JSON.parse(body);
        console.log(parsed);
    });
});

req.on('error', error => {
    console.error(error);
});

req.end() 

*/

/* Aplicando Patron  Facade*/

const get = (url) =>
  new Promise((resolve, reject) => {
    const urlCompose = url.split("/");
    const host = urlCompose.shift();

    const options = {
      hostname: host, //reqres.in
      path: `/${urlCompose.join("/")}`, ///api/users?per_page=12
      method: "GET",
    };

    const req = https.request(options, (res) => {
      res.setEncoding("utf8");
      let body = "";
      res.on("data", (data) => {
        body += data;
      });
      res.on("end", (data) => {
        const parsed = JSON.parse(body);
        resolve(parsed);
      });
    });

    req.on("error", (error) => {
      console.error(error);
      reject(error);
    });

    req.end();
  });

const main = async () => {
  const result = await get("reqres.in/api/users?per_page=12");
  console.info(result);
  console.table(result.data);
};

main();

/* Patron adaptador */

// primeras versiones sin aplicar el patron estructural adaptador
//--------------------------------------------------------------------

const recursos = "https://jsonplaceholder.typicode.com/posts";
const dataToPost = {
  title: "foo",
  body: "bar",
  userId: 1,
};

class Api {
  constructor() {
    this.operations = async (url, dataOptions, verb) => {
      switch (verb) {
        case "get":
          try {
            const response = await axios.get(url);
            console.log(response.data[0]);
            return response;
          } catch (error) {
            console.error(error);
            return error;
          }
        case "post":
          try {
            const response = await axios.post(
              url,
              JSON.stringify(dataOptions)
            );
            console.log(response.data);
            return response;
          } catch (error) {
            console.error(error);
            return error;
          }
        default:
          return;
      }
    };
  }
}

const api = new Api()
api.operations(recursos, {}, "get");
api.operations(recursos, dataToPost, "post");

//----------------------------------------------------------------------------
class ApiTwo {
  constructor() {
    this.get = async function (url, dataOptions) {
      try {
        const response = await axios.get(url);
        console.log(response.data[50]);
        return response;
      } catch (error) {
        console.error(error);
        return error;
      }
    };
    this.post = async function (url, dataOptions) {
      try {
        const response = await axios.post(url, JSON.stringify(dataOptions));
        console.log(response.data);
        return response;
      } catch (error) {
        console.error(error);
        return error;
      }
    };
  }
}

const resultApiTwo = new ApiTwo();
resultApiTwo.get(recursos, {});
resultApiTwo.post(recursos, dataToPost);

//--------------------------------------------------------------------

// aplicando el patron adaptador

class ApiAdpter {
  constructor() {
    const api2 = new ApiTwo();

    this.operations = async function (url, dataOptions, verb) {
      switch (verb) {
        case "get":
          return api2.get(url);
        case "post":
          return api2.post(url, dataOptions);
        default:
          return;
      }
    };
  }
}

const adapterApi = new ApiAdpter();
adapterApi.operations(recursos, {}, "get");
adapterApi.operations(recursos, dataToPost, "post");
