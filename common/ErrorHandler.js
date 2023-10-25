import store from "../store";

const ErrorHandler = function(error) {
  if (parseInt(error.response.status / 400) === 1) {
    let originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      store.dispatch("users/unAuthorized");
    } else if (error.response.status === 402) {
      store.dispatch("users/userConfig", window.location.pathname);
    } else if (error.response.status === 409) {
      store.dispatch("users/accessDenied");
    } else {
      return error;
    }
    if (error.response.data.code) {
      let text = "";
      if (typeof error.response.data.message == "object") {
        let messages = error.response.data.message;
        Object.keys(messages).map(item => {
          text += item + " : " + messages[item][0];
        });
      } else text = error.response.data.message;

      this.$snotify.error({
        body: text,
        title: "Error",
        config: {}
      });
    }
  } else if (parseInt(error.response.status / 500) === 1) {
    store.dispatch("users/serverError");
  } else {
    return error;
  }
};
export default ErrorHandler;
