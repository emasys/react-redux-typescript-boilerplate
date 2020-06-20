import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
});

instance.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
instance.defaults.headers.put['Content-Type'] =
  'application/x-www-form-urlencoded';
instance.defaults.timeout = 60000;

// You can add more config
