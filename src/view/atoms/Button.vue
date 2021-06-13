<template>
  <button @click="onClick" :id="id">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ["id"],
  methods: {
    onClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>
