<template>
  <component
    :is="component"
    v-on="$listeners"
    :id="id"
    :href="href"
    :class="'ui button ' + className"
  >
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
    className: String,
  },
};
</script>
