import axios from "axios";
// import NProgress from "nprogress/nprogress";
const API_URL = process.env.VUE_APP_DOMAIN;

export const WithOutErrorHttp = axios.create({
  baseURL: API_URL
});

let inProcessRequest = 0;
WithOutErrorHttp.interceptors.request.use(config => {
  inProcessRequest += 1;
  // NProgress.start();
  let token = localStorage.getItem("token");
  if (token) config.headers.authorization = `Token ${token}`;
  return config;
});

WithOutErrorHttp.interceptors.response.use(
  response => {
    inProcessRequest -= 1;
    if (inProcessRequest === 0) {
      // NProgress.done();
    }
    return response;
  },
  function(error) {
    inProcessRequest -= 1;
    if (inProcessRequest === 0) {
      // NProgress.done();
    }
    return Promise.reject(error);
  }
);
