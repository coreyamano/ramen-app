import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import moment from "moment";
moment().format();
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import Popper from "popper.js";
Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false;
// import { createPopper } from "@popperjs/core";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  watch: {
    $route: function () {
      window.location.reload();
    },
  },
}).$mount("#app");
