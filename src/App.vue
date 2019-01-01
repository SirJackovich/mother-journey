<template>
  <div id="app">
    <header>
      <div v-if="!isLoggedIn" class="login-wrapper">
        <a class="hide login blue-hover" v-on:click="goToLogin">Login</a>
      </div>
      <b-dropdown class="login" v-if="isLoggedIn" variant="link" :text="user.username">
        <b-dropdown-item class="blue-hover" to="/blog/create">
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
  @import "assets/styles/colors.styl"

  @font-face {
    font-family: 'Noteworthy Light';
    font-style: normal;
    font-weight: normal;
    src: local('Noteworthy'), url('assets/fonts/Noteworthy-Lt.woff') format('woff');
  }

  * {
    font-family: 'Noteworthy Light';
    text-align: center;
    font-size: 18px;
  }

  h2 {
    padding-bottom: 50px;
  }
  .button {
    color: white;
    font-size: 18px;
    border-radius: 15px;
    margin-bottom: 50px;
    width: 136px;
    height: 40px;
    cursor: pointer;
  }

  section {
    flex: 3 0;
    padding-right: 50px;
  }

  .alert {
    margin: 0 110px;
  }

  aside {
    flex: .6 0 0;
    form {
      .form-group {
        margin: 0;
        label {
          padding: 5px 10px;
          font-size: 16px;
          color: white;
          background-color: color-pink;
          border-radius: 10px;
          width: inherit;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          margin: 0;
          height: 34px;
        }
        input {
          font-size: 16px;
          padding: 0;
          padding-left: 5px;
          height: 34px;
          border: none;
          border-bottom: 1px solid color-pink;
          border-top: 1px solid color-pink;
          border-radius: 0;
        }
        input:focus,
        input:hover {
          border-color: color-pink;
        }
        button {
          background-color: transparent;
          padding: 0;
          height: 34px;
          border: 1px solid color-pink;
          border-left: none;
          border-radius: 10px;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          cursor: pointer;
          img {
            height: 24px;
          }
        }
      }
      .form-group:hover input,
      .form-group:hover button,
      input:focus ~ button {
        background-color: white;
      }
    }
    .banner {
      border-radius: 15px;
      padding: 40px 10px 10px 10px;
      height: 330px;
      h3 {
        padding-top: 20px;
        padding-bottom: 50px;
      }
    }
    .resources {
      background-color: color-light-blue;
      .button {
        background-color: color-light-blue;
      }
    }
    .about {
      background-color: color-purple;
      .button {
        background-color: color-purple;
      }
    }
    .contact {
      background-color: color-pink;
      .button {
        background-color: color-pink;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    .form-group {
      display: flex;
      justify-content: flex-end;
      flex-grow: 1;
      .is-invalid {
        border-color: red;
      }
      label {
        max-width: 100px;
        font-size: 24px;
        color: color-purple;
        width: 118px;
        margin: auto;
      }
      input,
      textarea,
      .multiselect,
      .multiselect__tags,
      .vue-dropzone {
        border-color: color-green;
        background-color: color-gray;
        border-radius: 10px;
        text-align: left;
      }
      textarea {
        height: 300px;
      }
      input {
        height: 50px;
      }
      input:focus,
      input:hover,
      textarea:focus,
      textarea:hover,
      .multiselect:focus,
      .multiselect:hover,
      .multiselect__tags:focus,
      .multiselect__tags:hover,
      .multiselect__select:hover,
      .vue-dropzone:hover {
        background-color: white;
        box-shadow: none;
        border-color: color-green;
      }
      button {
        background-color: color-green;
      }
      button:focus {
        outline: none;
      }

    }
  }

  .banner {
    margin: 50px 0;
    h3 {
      color: white;
      padding-top: 50px;
      padding-bottom: 20px;
    }
    .button {
      background-color: color-light-blue;
      border-color: white;
    }
  }

  #app {
    background-color: color-gray;

    header {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      background-image: url(assets/img/aaron-burden-heading.jpeg);
      background-size: 100%;
      background-repeat: no-repeat;
      min-height: 300px;
      margin-bottom: 50px;
      .login-wrapper {
        display: flex;
        justify-content: flex-end;
      }
      a {
        color: white;
        font-weight: bold;
        font-size: 20px;
      }
      a:hover,
      button:hover {
        text-decoration: none;
      }
      .hide {
        color: transparent;
      }
      .login {
        font-size: 14px;
        text-align: right;
        padding-right: 30px;
        display: flex;
        align-self: flex-end;
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
      .dropdown-menu.show {
        display: flex;
        flex-direction: column;
        min-width: auto;
        .dropdown-item {
          padding: 0;
          font-size: 14px;
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
      },
      goToLogin(){
        router.push({ path: '/login', query: { returnUrl: this.$route.path }});
      }
    },
    computed: {
      isLoggedIn: function() {
        return !!this.user;
      }
    }

  };
</script>
