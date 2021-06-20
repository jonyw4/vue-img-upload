<template>
  <header class="ui menu">
    <router-link component="router-link" class="header item" to="/">
      <span>Image Storage</span>
    </router-link>
    <div class="right menu" v-if="isLogged">
      <router-link
        component="router-link"
        id="gallery"
        class="ui button item"
        to="/gallery"
      >
        Gallery
      </router-link>
      <router-link
        component="router-link"
        id="upload"
        class="ui button item"
        to="/upload"
      >
        Upload
      </router-link>
      <Button
        @click="$emit('clickLogoutBtn', $event)"
        id="logout"
        className="item"
      >
        Logout
      </Button>
    </div>
    <div class="right menu" v-else>
      <Button
        component="a"
        id="login"
        className="item"
        @click="$emit('clickLoginBtn', $event)"
      >
        Login
      </Button>
      <Button
        component="a"
        id="signup"
        className="item"
        @click="$emit('clickSignUpBtn', $event)"
      >
        SignUp
      </Button>
    </div>
  </header>
</template>

<script>
import Button from "../atoms/Button.vue";
export default {
  name: "Header",
  components: { Button },
  props: ["isLogged"],
};
</script>
