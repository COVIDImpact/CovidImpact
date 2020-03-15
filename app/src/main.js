import Vue from "vue";
import App from "./App.vue";
import {
  DropdownPlugin,
  VBModalPlugin,
  ModalPlugin,
  ButtonPlugin
} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Vue.use(InstantSearch);
Vue.use(DropdownPlugin);
Vue.use(VBModalPlugin);
Vue.use(ModalPlugin);
Vue.use(ButtonPlugin);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
