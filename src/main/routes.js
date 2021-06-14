import Home from "../view/templates/Home.vue";
import AuthHandler from "../view/templates/AuthHandler.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/oauth2/callback",
    component: AuthHandler,
    props: () => ({
      urlHash: location.hash,
    }),
  },
];

export default routes;
