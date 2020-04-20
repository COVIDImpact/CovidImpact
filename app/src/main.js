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


// Ready translated locale messages
const messages = {
  en: {
    message: {
      "message.callToAction.signUp": "Sign-up for the latest updates and small businesss tools!"
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
};

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'ja', // set locale
  messages, // set locale messages
});

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
  i18n,
  router,
  render: h => h(App)
}).$mount("#app");
