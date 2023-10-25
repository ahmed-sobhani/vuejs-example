import axios from "axios";
import ErrorHandler from "./ErrorHandler";
const API_URL = process.env.VUE_APP_DOMAIN;

export const RHTTP = axios.create({
  baseURL: API_URL
});

RHTTP.interceptors.request.use(config => {
  let token = localStorage.getItem("token");
  if (token) config.headers.authorization = `Token ${token}`;
  return config;
});

RHTTP.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    ErrorHandler(error);
    return Promise.reject(error);
  }
);
