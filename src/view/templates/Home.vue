<template>
  <BaseLayout>
    <h1 v-if="isLogged">Hello again!</h1>
    <h1 v-else>Log in to see your pictures</h1>
  </BaseLayout>
</template>

<script>
import BaseLayout from "../organisms/BaseLayout.vue";
import { authState } from "../_states";
export default {
  name: "Home",
  components: { BaseLayout },
  computed: {
    isLogged() {
      return authState.isLogged;
    },
  },
};
</script>
