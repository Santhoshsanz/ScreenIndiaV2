// import Vue from "vue";
import CButton from "./CButton";
import GalleryCard from "./GalleryCard";

const Components = {
  CButton,
  GalleryCard
};

const CommonComponents = {
  install(Vue) {
    Object.keys(Components).filter(e => {
      Vue.component(Components[e].name, Components[e]);
    });
  }
};

export default CommonComponents;
