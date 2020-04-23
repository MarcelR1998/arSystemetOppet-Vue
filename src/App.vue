<template>
  <div id="app">
    <navbar />
    <router-view>
      <!--   <main-component v-bind:storeInfo="storeInfo" @update-store="updateStore" />
      <about />-->
    </router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
/* import mainComponent from "./components/mainComponent.vue";
import About from "./components/About.vue"; */

export default {
  name: "App",
  components: {
    Navbar
    /*     mainComponent,
    About */
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css?family=Playfair+Display&display=swap");

body {
  margin: 0;
  background-color: #0b7b3e;
  text-align: center;
}

* {
  font-family: "Montserrat", sans-serif;
  outline: none;
}

h1 {
  transform: rotate(-5deg);
}

h1,
h2,
h3 {
  font-family: "Playfair Display", serif;
}
</style>
