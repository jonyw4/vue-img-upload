<template>
  <BaseLayout>
    <div>Please wait...</div>
  </BaseLayout>
</template>

<script>
import { authState } from "../_states";
import BaseLayout from "../organisms/BaseLayout.vue";
export default {
  name: "AuthHandler",
  components: { BaseLayout },
  props: ["urlHash"],
  inject: ["oauthService"],
  beforeMount() {
    if (authState.isLogged) {
      this.redirectToHome();
    }
  },
  mounted() {
    this.finalizeLogin();
  },
  methods: {
    finalizeLogin() {
      this.oauthService.finalizeLoginAuth(this.urlHash);
      authState.isLogged = true;
      this.redirectToHome();
    },
    redirectToHome() {
      this.$router.push("/");
    },
  },
};
</script>
