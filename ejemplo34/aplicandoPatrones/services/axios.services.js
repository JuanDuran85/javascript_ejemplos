const axios = require("axios");

const instanceAxios = axios.create({
  baseURL: "https://reqres.in/api",
  timeout: 1000,
  headers: {},
});

const adapterAxios = {
  get: url => instanceAxios.get(url),
  post: (url, data) => instanceAxios.post(url, data),
  put: (url, data) => instanceAxios.put(url, data),
  delete: url => instanceAxios.delete(url),
}

module.exports = adapterAxios;
