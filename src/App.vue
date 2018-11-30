<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="primary" fixed="top">
      <b-navbar-brand href="/">This Mother's Journey</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="/blog">Blog</b-nav-item>
          <b-nav-item href="/faq">FAQ</b-nav-item>
          <b-nav-item href="/resources">Resources</b-nav-item>
          <b-nav-item href="/about">About</b-nav-item>
          <b-nav-item href="/contact">Contact</b-nav-item>
          <b-nav-item v-if="isLoggedIn" href="/create">Create</b-nav-item>
          <b-nav-item v-if="!isLoggedIn" to="/login">Login</b-nav-item>
          <b-nav-item v-if="isLoggedIn" v-on:click="logout">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import router from './router';
  export default {
    name: 'app',
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
      document.addEventListener('loggedIn', user => {
        this.user = user;
      })

    },
    methods: {
      logout: function (evt) {
        this.user = null;
        sessionStorage.removeItem('user');
        evt.stopPropagation();
        router.push('/');
      }
    },
    computed: {
      isLoggedIn: function() {
        return !!this.user;
      }
    }

  };
</script>
