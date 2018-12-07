<template>
  <div id="app">
    <header>
      <router-link class="login blue-hover" v-if="!isLoggedIn" to="/login">Login</router-link>
      <b-dropdown class="login" v-if="isLoggedIn" variant="link" :text="user.username">
        <b-dropdown-item class="blue-hover" to="/create">
          Create
        </b-dropdown-item>
        <b-dropdown-item  class="blue-hover" v-on:click="logout">
          Logout
        </b-dropdown-item>
      </b-dropdown>
      <h1><router-link class="blue-hover" to="/">This Mother's Journey</router-link></h1>
      <nav>
        <router-link class="blue-hover" to="/">Home</router-link>
        <router-link class="purple-hover" to="/about">About</router-link>
        <router-link class="pink-hover" to="/blog">Blog</router-link>
        <router-link class="blue-hover" to="/resources">Resources</router-link>
        <router-link class="purple-hover" to="/faq">FAQ</router-link>
        <router-link class="pink-hover" to="/contact">Contact</router-link>
        <!--<router-link v-if="isLoggedIn" href="/create">Create</router-link>-->
        <!--<router-link v-if="isLoggedIn" v-on:click="logout">Logout</router-link>-->
      </nav>
    </header>
    <router-view @loggedIn="login"></router-view>
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
      a {
        color: white;
        font-weight: bold;
        font-size: 20px;
      }
      a:hover,
      button:hover {
        text-decoration: none;
      }
      .login {
        font-size: 14px;
        text-align: right;
        padding-right: 30px;
        display: flex;
        justify-content: flex-end;
        .btn {
          font-size: 14px;
          font-weight: bold;
          color: white;
          padding: 0;
          border: none;
          height: inherit;
          width: inherit;
        }
      }
      .show {
        .btn{
          color: color-blue;
        }
      }

      .blue-hover:hover
      .blue-hover.router-link-exact-active,
      .btn-link:hover,
      .btn-link:focus,
      .blue-hover.active  {
        color: color-blue;
      }
      .dropdown-menu,
      .dropdown-item,
      .dropdown-item:hover {
        background-color: transparent;
        border: none;
      }
      .dropdown-menu {
        a {
          font-size: 14px;
          text-align: right;
          padding-right: 30px;
        }
      }
      h1{
        padding-right: 20%;
        a {
          color: color-blue;
          font-size: 72px;
          font-weight: normal;
        }
      }
      nav{
        display: flex;
        justify-content: space-around;
        .purple-hover:hover,
        .purple-hover.router-link-exact-active {
          color: color-purple;
        }
        .pink-hover:hover
        .pink-hover.router-link-exact-active {
          color: color-pink;
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
    },
    methods: {
      logout: function (evt) {
        this.user = null;
        sessionStorage.removeItem('user');
        evt.stopPropagation();
        router.push('/');
      },
      login(user) {
        this.user = user;
      }
    },
    computed: {
      isLoggedIn: function() {
        return !!this.user;
      }
    }

  };
</script>
