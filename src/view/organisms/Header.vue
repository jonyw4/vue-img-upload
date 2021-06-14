<template>
  <header>
    <Button component="a" @click="$emit('clickLogo', $event)">
      <span>Image Storage</span>
    </Button>
    <div v-if="isLogged">
      <Button @click="$emit('clickLogoutBtn', $event)" id="logout"
        >Logout</Button
      >
    </div>
    <div v-if="!isLogged">
      <Button @click="$emit('clickLoginBtn', $event)" id="login">
        Login
      </Button>
      <Button @click="$emit('clickSignUpBtn', $event)" id="signup">
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
