import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import CommonComponents from "./common-components";
Vue.config.productionTip = false;

Vue.use(CommonComponents);

new Vue({
  render: h => h(App)
}).$mount("#app");
