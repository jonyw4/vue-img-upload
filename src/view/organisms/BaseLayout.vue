<template>
  <div>
    <Header
      @clickLoginBtn="onClickLoginBtn"
      @clickLogoutBtn="onClickLogoutBtn"
      :isLogged="isLogged"
    />
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import { authState } from "../_states";
import Header from "./Header.vue";
export default {
  name: "BaseLayout",
  components: { Header },
  inject: ["oauthService"],
  created() {
    this.initiateAuthState();
  },
  computed: {
    isLogged() {
      return authState.isLogged;
    },
  },
  methods: {
    initiateAuthState() {
      const isLogged = this.oauthService.isLogged();
      authState.isLogged = isLogged;
    },
    onClickLoginBtn() {
      const url = this.oauthService.getLoginAuthUrl();
      window.location = url;
    },
    onClickLogoutBtn() {
      this.oauthService.logout();
      authState.isLogged = false;
    },
  },
};
</script>
