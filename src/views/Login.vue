<template>
  <div id="login">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" v-model="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && !username }" />
      </div>
      <div class="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
      </div>
      <div class="form-group">
        <button :disabled="loading" class="button">Login</button>
        <img v-show="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
      </div>
      <div v-if="error" class="alert alert-danger">{{error}}</div>
    </form>
  </div>
</template>

<style lang="stylus">
  @import "../assets/styles/common.styl"

  #login{
    h2 {
      color: color-blue;
      font-size: 40px;
    }
    form {
      width: 600px;
      margin: auto;
      .form-group {
        label {
          padding-right: 20px
        }
      }
    }
  }
</style>

<script>
  import router from '../router';
  import { userService } from '../_services';

  export default {
    data () {
      return {
        username: '',
        password: '',
        submitted: false,
        loading: false,
        returnUrl: '',
        error: ''
      }
    },
    created () {
      // reset login status
      userService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.$route.query.returnUrl || '/';
    },
    methods: {
      handleSubmit (e) {
        this.submitted = true;
        const { username, password } = this;

        // stop here if form is invalid
        if (!(username && password)) {
          alert("Invalid entry");
          return;
        }

        this.loading = true;
        userService.login(username, password).then(user => {
          router.push(this.returnUrl);
          this.$emit('loggedIn', user)
        });
      }
    }
  };
</script>


