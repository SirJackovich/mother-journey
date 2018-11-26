<template>
  <div id="app">
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/resources">Resources</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li>
          <a href="" v-if="isLoggedIn" v-on:click="logout">Logout</a>
          <router-link v-if="!isLoggedIn" to="/login">Login</router-link></li>
      </ul>
    </nav>
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
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
<script>
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
      }
    },
    computed: {
      isLoggedIn: function() {
        console.log('USER: ', this.user);
        return !!this.user;
      }
    }

  };
</script>
