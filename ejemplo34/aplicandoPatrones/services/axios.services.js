const axios = require("axios");

const instanceAxios = axios.create({
  baseURL: "https://restcountries.com",
  timeout: 1000,
  headers: {},
});

const adapterAxios = {
  get: url => instanceAxios.get(url),
}

module.exports = adapterAxios;
