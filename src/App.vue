<template>
  <div id="app">
    <Landing></Landing>
    <Products />
    <AboutUs />
    <Clients />
    <ContactUs />

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Products from "./components/products";
import AboutUs from "./components/aboutUs";
import Clients from "./components/clients";
import ContactUs from "./components/contactUs";
import Landing from "./components/landing";

export default {
  name: "App",
  components: {
    HelloWorld,
    Products,
    AboutUs,
    Clients,
    ContactUs,
    Landing
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // margin-top: 30px;
}
</style>
