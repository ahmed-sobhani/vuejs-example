import Vue from "vue";
import currency from "./../filters/currency";
import shortDate from "./../filters/shortDate";
import fileName from "./../filters/fileName";
Vue.filter("currency", currency);
Vue.filter("shortDate", shortDate);
Vue.filter("fileName", fileName);