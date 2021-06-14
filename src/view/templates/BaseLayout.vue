<template>
  <div>
    <Header
      @clickLoginBtn="$emit('header:clickLoginBtn', $event)"
      @clickLogoutBtn="$emit('header:clickLogoutBtn', $event)"
      @clickSignUpBtn="$emit('header:clickSignUpBtn', $event)"
      @clickLogo="$emit('header:clickLogo', $event)"
      :isLogged="isLogged"
    />
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import Header from "../organisms/Header.vue";
export default {
  name: "BaseLayout",
  components: { Header },
  props: ["isLogged"],
};
</script>
