<template>
  <component :is="component" v-on="$listeners" :id="id" :href="href">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "Button",
  props: {
    id: String,
    component: {
      default: "button",
    },
    href: String,
  },
};
</script>
