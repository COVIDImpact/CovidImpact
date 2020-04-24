import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import VueI18n from "vue-i18n";
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
import messages from "./i18n/messages";

// Vue.use(InstantSearch);
Vue.use(VueI18n);
Vue.use(DropdownPlugin);
Vue.use(VBModalPlugin);
Vue.use(ModalPlugin);
Vue.use(ButtonPlugin);
Vue.use(TooltipPlugin);
Vue.use(VueAxios, axios);
Vue.use(CardPlugin);
Vue.config.productionTip = false;

const browserLocale = navigator.language.split('-')[0];
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: browserLocale, // set locale
  messages, // set locale messages
});

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount("#app");
