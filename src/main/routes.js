import Home from "../view/templates/Home.vue";
import AuthHandler from "../view/templates/AuthHandler.vue";
import PhotoLibrary from "../view/templates/PhotoLibrary.vue";

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
  {
    path: "/gallery",
    component: PhotoLibrary,
  },
];

export default routes;
