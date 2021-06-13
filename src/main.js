import Vue from "vue";
import App from "./main/App.vue";

new Vue({
  render: (createElement) => createElement(App),
}).$mount("#app");
