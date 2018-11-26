<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <h1>Hi {{user.firstName}}!</h1>
      <p>You're logged in with Vue.js & Basic HTTP Authentication!!</p>
      <h3>Users from secure api end point:</h3>
      <em v-if="users.loading">Loading users...</em>
      <ul v-if="users.length">
        <li v-for="user in users" :key="user.id">
          {{user.username}}
        </li>
      </ul>
      <p>
        <router-link to="/login">Logout</router-link>
      </p>
    </div>
  </div>
</template>

<script>
  import { userService } from '../_services';

  export default {
    data () {
      return {
        user: {},
        users: []
      }
    },
    created () {
      this.user = JSON.parse(sessionStorage.getItem('user'));
      this.users.loading = true;
      userService.getAll().then(users => this.users = users);
    }
  };
</script>
