<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <h1 v-if="user">Hi {{user.username}}!</h1>
      <p>You're logged in with Vue.js & Basic HTTP Authentication!!</p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: null
      }
    },
    created () {
      try {
        this.user = JSON.parse(sessionStorage.getItem('user'));
      }catch (e) {
        console.error(e);
      }
    }
  };
</script>
