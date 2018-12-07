<template>
  <div id="contact">
    <h2>Contact</h2>
    <form @submit.prevent="handleSubmit">
      <div class="sender">
        <div class="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" v-model="name" name="name" class="form-control" :class="{ 'is-invalid': submitted && !name }" />
          <div v-show="submitted && !name" class="invalid-feedback">Name is required</div>
        </div>
        <div class="form-group">
          <label htmlFor="email" class="email">Email</label>
          <input type="text" v-model="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && !email }" />
          <div v-show="submitted && !email" class="invalid-feedback">Email is required</div>
        </div>
      </div>
      <div class="form-group">
        <label htmlFor="subject">Subject</label>
        <input type="text" v-model="subject" name="subject" class="form-control" :class="{ 'is-invalid': submitted && !subject }" />
        <div v-show="submitted && !subject" class="invalid-feedback">Subject is required</div>
      </div>
      <div class="form-group">
        <label htmlFor="message">Message</label>
        <textarea type="text" v-model="message" name="message" class="form-control" :class="{ 'is-invalid': submitted && !message }"></textarea>
        <div v-show="submitted && !message" class="invalid-feedback">Message is required</div>
      </div>
      <div class="form-group">
        <button :disabled="loading">Send</button>
        <img v-show="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
      </div>
      <div v-if="error" class="alert alert-danger">{{error}}</div>
    </form>
  </div>
</template>

<style lang="stylus">
  @import "../assets/styles/common.styl"

  #contact{
    h2 {
      color: color-pink;
    }
    form {
      display: flex;
      flex-direction: column;
      padding: 0 110px;
      .sender {
        display: flex;
      }
      .form-group {
        display: flex;
        justify-content: flex-end;
        flex-grow: 1;
        .email {
          padding-left: 40px;
          padding-right: 10px;
        }
        label {
          max-width: 100px;
          font-size: 24px;
          color: color-purple;
          width: 118px;
        }
        textarea {
          height: 300px;
        }
        input,
        textarea {
          border-color: color-green;
          background-color: color-gray;
          border-radius: 10px;
          text-align: left;
        }
        input:focus,
        input:hover,
        textarea:focus,
        textarea:hover{
          background-color: white;
        }
        button {
          background-color: color-green;
        }
      }
    }
  }
</style>

<script>
  import { emailService } from '../_services';

  export default {
    data () {
      return {
        name: '',
        email: '',
        subject: '',
        message: '',
        submitted: false,
        loading: false,
        error: ''
      }
    },
    methods: {
      handleSubmit (e) {
        this.submitted = true;
        const { name, email, subject, message } = this;

        // stop here if form is invalid
        if (!(name && email && subject && message)) {
          return;
        }

        this.loading = true;
        emailService.email(name, email, subject, message);
        this.submitted = false;
        this.loading = false;
        this.name = '';
        this.email = '';
        this.subject = '';
        this.message = '';
        this.error = '';
      }
    }
  };
</script>
