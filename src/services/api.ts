import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gist.githubusercontent.com/Ispx/3b47ee1d8207ada24323d3c9d493d80f/raw/bde4c4b9290492e370cea7ee2462f4e2393db03b',

});

export default api;