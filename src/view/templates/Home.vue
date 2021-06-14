<template>
  <BaseLayout v-on="$listeners">
    <h1>Hello!</h1>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout.vue";
export default {
  name: "Home",
  components: { BaseLayout },
};
</script>
