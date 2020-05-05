import Vue from "vue";
import App from "./App.vue";
import VueAgile from "vue-agile";
import "./registerServiceWorker";
import CommonComponents from "./common-components";
Vue.config.productionTip = false;

Vue.use(CommonComponents);
Vue.use(VueAgile);

new Vue({
  render: h => h(App)
}).$mount("#app");
