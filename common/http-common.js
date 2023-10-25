import axios from "axios";
// import NProgress from "nprogress/nprogress";
import ErrorHandler from "./ErrorHandler";
import store from "./../store/index";
// import router from "./../router/index";
import { routerOptions } from './../.nuxt/router';

const API_URL = process.env.VUE_APP_DOMAIN || "http://185.239.105.176/api";
const MEDIA_URL = process.env.VUE_APP_MEDIA_URL;
export const HTTP = axios.create({
  baseURL: API_URL,
  mediaUrl: MEDIA_URL
});

let inProcessRequest = 0;

HTTP.interceptors.request.use(config => {
  inProcessRequest += 1;
  // NProgress.start();
  let token = localStorage.getItem("token");
  if (token) config.headers.authorization = `Bearer ${token}`;
  return config;
});

HTTP.interceptors.response.use(
  response => {
    inProcessRequest -= 1;
    if (inProcessRequest === 0) {
      // NProgress.done();
    }
    return response;
  },
  function(error) {
    if (error.response.status === 401) {
      store()
        .dispatch("auth/logout")
        
    }
    ErrorHandler(error);

    inProcessRequest -= 1;
    if (inProcessRequest === 0) {
      // NProgress.done();
    }
    return Promise.reject(error);
  }
);
