<template>
  <div id="contact">
    <h2>Contact Me</h2>
    <p v-if="sent">Message sent</p>
    <div v-if="error" class="alert alert-danger">{{error}}</div>
    <form @submit.prevent="handleSubmit">
      <div class="sender">
        <div class="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" v-model="name" name="name" class="form-control" :class="{ 'is-invalid': submitted && !name }" />
        </div>
        <div class="form-group">
          <label htmlFor="email" class="email">Email</label>
          <input type="text" v-model="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && !email }" />
        </div>
      </div>
      <div class="form-group">
        <label htmlFor="subject">Subject</label>
        <input type="text" v-model="subject" name="subject" class="form-control" :class="{ 'is-invalid': submitted && !subject }" />
      </div>
      <div class="form-group">
        <label htmlFor="message">Message</label>
        <textarea type="text" v-model="message" name="message" class="form-control" :class="{ 'is-invalid': submitted && !message }"></textarea>
      </div>
      <div class="form-group">
        <button :disabled="loading" class="button">Send</button>
      </div>
    </form>
  </div>
</template>

<style lang="stylus">
  @import "../assets/styles/common.styl"

  #contact{
    h2 {
      color: color-pink;
      font-size: 40px;
    }
    form {
      padding: 0 110px;
      .sender {
        display: flex;
      }
      .form-group {
        .email {
          padding-left: 40px;
          padding-right: 10px;
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
        error: '',
        sent: false
      }
    },
    methods: {
      handleSubmit (e) {
        this.submitted = true;
        this.sent = false;
        const { name, email, subject, message } = this;

        // stop here if form is invalid
        if (!(name && email && subject && message)) {
          alert("Invalid entry");
          return;
        }

        this.loading = true;
        emailService.email(name, email, subject, message).then(() => {
          this.sent = true;
          this.name = '';
          this.email = '';
          this.subject = '';
          this.message = '';
          this.error = '';
        }).catch(err => this.error = err);
        this.submitted = false;
        this.loading = false;
      }
    }
  };
</script>
