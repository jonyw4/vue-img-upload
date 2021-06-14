<template>
  <Home @header:clickLoginBtn="test" />
</template>

<script>
import Home from "../view/templates/Home.vue";
export default {
  name: "App",
  components: { Home },
  methods: {
    test() {
      console.log("test");
    },
  },
};
</script>
