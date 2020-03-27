import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import {
  DropdownPlugin,
  VBModalPlugin,
  ModalPlugin,
  ButtonPlugin,
  TooltipPlugin,
  CardPlugin
} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Vue.use(InstantSearch);
Vue.use(DropdownPlugin);
Vue.use(VBModalPlugin);
Vue.use(ModalPlugin);
Vue.use(ButtonPlugin);
Vue.use(TooltipPlugin);
Vue.use(VueAxios, axios);
Vue.use(CardPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
