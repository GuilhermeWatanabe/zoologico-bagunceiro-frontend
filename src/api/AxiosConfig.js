import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://61793dbeaa7f3400174048b3.mockapi.io/api/'
});
