<template>
  <div>
    <h2>Home</h2>
    <h3 v-if="user">Hi {{user.username}}!</h3>
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
