import Vue from "vue";
import Vuex from "vuex";
import { auth } from "./auth.module";
import { opportunity } from "./opportunity.module";
import { sponsor } from "./sponsor.module";
import { investor } from "./investor.module";

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
  },
  modules: {
    auth,
    opportunity,
    sponsor,
    investor
  }
});
export default store
