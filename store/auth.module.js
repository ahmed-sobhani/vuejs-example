import api from "./../api";
import Vue from 'vue'
const authApi = api.auth;
let token
let user
if(process.client){
  token = localStorage ? localStorage.getItem("token") : null
  user = localStorage ? localStorage.getItem("user") : null
}
 


// const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjEwNTIyNjI0LCJqdGkiOiIzMmMyNjA0Zjk4NjU0Y2FhYjMwMzNlMDU4MzRhMmQ5NCIsInVzZXJfaWQiOjM1NH0.VuU8mxb1aH7kiOKKUhPNo_MmoYY7PbClqKLmYq3At68"
// const user = JSON.stringify({"id":354,"first_name":"amirhossein tets","last_name":"daliri test","email":"amirhhh@amir.com","phone":"+989371448695","user_type":1,"user_type_info":"Investor","country":"iran","organization":null,"is_verified":true,"is_active":true,"date_joined":"2021-01-10","last_login":null})
const initialState =
  user && token
    ? { status: { loggedIn: true }, user, investor: null  }
    
    : {
        status: { loggedIn: false },
        user: null,
        investor: null,
        accreditation_status: "Signup",
        EmialUser:null
      };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return authApi.login(user).then(
        user => {
          commit("loginSuccess", user);
          return Promise.resolve(user);
        },
        error => {
          commit("loginFailure");
          return Promise.reject(error);
        }
      );
    },
    async initAuth({ commit }) {      
      if(localStorage){
       const token = localStorage.getItem("token")
       const user =JSON.parse(localStorage.getItem("user"))
       const payload={token:token,user:user}
       await commit('settoken', payload)
      }
    
    },
    getProfile({ commit }) {
      return authApi.getProfile().then(
        user => {
          commit("getProfile", user);
          return Promise.resolve(user);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    getAccreditationStaus({ commit }) {
      return authApi.getAccreditationStaus().then(
        user => {
          commit("getAccreditationStaus", user);
          return Promise.resolve(user);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    updateProfile({ commit }, user) {
      return authApi.updateProfile(user).then(
        user => {
          commit("updateProfile", user);
          return Promise.resolve(user);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    updateAccount({ commit }, user) {
      return authApi.updateAccount(user).then(
        user => {
          commit("updateAccount", user);
          return Promise.resolve(user);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    uploadKYC({ commit }, user) {
      return authApi.uploadKYC(user).then(
        resp => {
          commit("getOk");
          return Promise.resolve(resp);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      authApi.logout();
      commit("logout");
      $nuxt.$router.push('/signin')

    },
    register({ commit }, user) {
      return authApi.register(user).then(
        response => {
          commit("registerSuccess");
          return Promise.resolve(response);
        },
        error => {
          commit("registerFailure");
          return Promise.reject(error);
        }
      );
    },
    SetUserEmail({commit},Email){
      commit("SetUserEmailMutation",Email)
    },
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user.user;
    },
    getProfile(state, user) {
      state.user = user.user;
      state.investor = user;
    },
    updateProfile(state, user) {
      state.user = user;
    },
    updateAccount(state, user) {
      state.user = user.user;
      state.investor = user;
    },
    getAccreditationStaus(state, user) {
      state.accreditation_status = user.accreditation_status;
    },
    uploadKYC(state) {
      console(state);
    },
    getOk() {},
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
      localStorage.clear();
    },
    registerSuccess(state) {
      state.status.loggedIn = true;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    },
    SetUserEmailMutation(state,argom){
      state.EmialUser = argom
    },
    settoken(state, info) {
    state.token = info.token
    state.user = info.user
    if(state.user){
      state.status = { loggedIn: true }
      state.investor= null
    }else{
      state.status= { loggedIn: false },
      state.user= null
      state.investor= null
      state.accreditation_status= "Signup"
      state.EmialUser=null
    }
    
    },

  }
};
