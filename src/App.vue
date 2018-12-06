<template>
  <div id="app">
    <header>
        <h1><router-link to="/">This Mother's Journey</router-link></h1>
        <nav>
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
      <p>Photo Credit: Aaron Burden on Unsplash, Website made by Jackovich Computing</p>
    </footer>
  </div>
</template>

<style lang="stylus">
  #app {
    background-color: #EDEDED;
    * {
      font-family: Noteworthy;
    }
    header {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      background-image: url(assets/aaron-burden-heading.jpeg);
      background-size: 100%;
      background-repeat: no-repeat;
      height: 364px;
      h1{
        a {
          color: #160CE8;
          font-size: 72px;
        }
        a:hover {
          text-decoration: none;
          color: #160CE8;
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
        .purple-hover:hover {
          color: #7C00A5;
        }
        .pink-hover:hover {
          color: #D6008F;
        }
        .blue-hover:hover {
          color: #160CE8;
        }
      }
    }
    footer{
      p{
        text-align: center;
        font-family: Calibri, sans-serif;
        font-size: 14px;
        color: black;
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
