import Vue from "vue";
import App from "./App.vue";
import routes from "./routes";
import VueRouter from "vue-router";
import {
  AxiosHttpClient,
  OAuthImgurService,
  AuthLocalStorageRepository,
  PhotoImgurService,
} from "../infra";
import { createImgurHttpClient } from "./factories";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});

// INFRA FACTORIES: PROTOCOLS
const httpClient = createImgurHttpClient(AxiosHttpClient);

// INFRA INJECTIONS: REPOSITORIES
const authRepository = new AuthLocalStorageRepository();

// INFRA INJECTIONS: SERVICES
const oauthService = new OAuthImgurService(authRepository);
const photoService = new PhotoImgurService(httpClient);

new Vue({
  render: (createElement) => createElement(App),
  provide: {
    photoService,
    oauthService,
  },
  router,
}).$mount("#app");
