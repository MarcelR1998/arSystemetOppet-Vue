import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import mainComponent from "./components/mainComponent.vue";
import About from "./components/About.vue";

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: "/", component: mainComponent, props: true },
    { path: "/about", component: About }
  ],
  mode: "history"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
