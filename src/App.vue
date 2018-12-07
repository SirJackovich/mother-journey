<template>
  <div id="app">
    <header>
        <h1><router-link to="/">This Mother's Journey</router-link></h1>
        <nav>
          <router-link class="blue-hover" to="/">Home</router-link>
          <router-link class="purple-hover" to="/about">About</router-link>
          <router-link class="pink-hover" to="/blog">Blog</router-link>
          <router-link class="blue-hover" to="/resources">Resources</router-link>
          <router-link class="purple-hover" to="/faq">FAQ</router-link>
          <router-link class="pink-hover" to="/contact">Contact</router-link>
          <!--<router-link v-if="isLoggedIn" href="/create">Create</router-link>-->
          <!--<router-link v-if="!isLoggedIn" to="/login">Login</router-link>-->
          <!--<router-link v-if="isLoggedIn" v-on:click="logout">Logout</router-link>-->
        </nav>
    </header>
    <router-view></router-view>
    <footer>
      <p>Heading Photo by <a href="https://unsplash.com/photos/-3Dc-I-65ug?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aaron Burden</a> on <a href="https://unsplash.com/search/photos/hot-air-balloon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
      <p>©2018 by This Mother's Journey</p>
    </footer>
  </div>
</template>

<style lang="stylus">
  @import "assets/styles/common.styl"

  #app {
    background-color: color-gray;
    header {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      background-image: url(assets/img/aaron-burden-heading.jpeg);
      background-size: 100%;
      background-repeat: no-repeat;
      height: 364px;
      margin-bottom: 50px;
      h1{
        padding-right: 20%;
        a {
          color: color-blue;
          font-size: 72px;
        }
        a:hover {
          text-decoration: none;
          color: color-blue;
        }
      }
      nav{
        display: flex;
        justify-content: space-around;
        a {
          color: white;
          font-weight: bold;
          font-size: 20px;
        }
        a:hover {
          text-decoration: none;
        }
        .purple-hover:hover,
        .purple-hover.router-link-exact-active {
          color: color-purple;
        }
        .pink-hover:hover
        .pink-hover.router-link-exact-active {
          color: color-pink;
        }
        .blue-hover:hover
        .blue-hover.router-link-exact-active {
          color: color-blue;
        }
      }
    }
    footer{
      p{
        font-family: Calibri, sans-serif;
        font-size: 14px;
        margin: 0;
      }
    }
  }
</style>

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
