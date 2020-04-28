// import Vue from "vue";
import CButton from "./CButton";

const Components = {
  CButton
};

const CommonComponents = {
  install(Vue) {
    Object.keys(Components).filter(e => {
      Vue.component(Components[e].name, Components[e]);
    });
  }
};

export default CommonComponents;
