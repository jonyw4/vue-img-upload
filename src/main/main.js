import Vue from "vue";
import App from "./App.vue";
import routes from "./routes";
import VueRouter from "vue-router";
import { OAuthImgurService, AuthLocalStorageRepository } from "../infra";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});

const authRepository = new AuthLocalStorageRepository();
const oauthService = new OAuthImgurService(authRepository);

new Vue({
  render: (createElement) => createElement(App),
  provide: {
    oauthService,
  },
  router,
}).$mount("#app");
