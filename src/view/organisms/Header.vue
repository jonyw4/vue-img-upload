<template>
  <header class="ui menu">
    <Button
      component="a"
      @click="$emit('clickLogo', $event)"
      className="header item"
    >
      <span>Image Storage</span>
    </Button>
    <div class="right menu" v-if="isLogged">
      <Button
        component="a"
        id="galleries"
        className="item"
        @click="$emit('clickGalleriesBtn', $event)"
      >
        Galleries
      </Button>
      <Button
        component="a"
        id="upload"
        className="item"
        @click="$emit('clickUploadBtn', $event)"
      >
        Upload
      </Button>
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
