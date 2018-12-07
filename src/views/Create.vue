<template>
  <div id="create">
    <h2>Create</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" v-model="title" name="title" class="form-control" :class="{ 'is-invalid': submitted && !title }" />
      </div>
      <div class="form-group">
        <label htmlFor="quote">Quote</label>
        <textarea type="text" v-model="quote" name="quote" class="form-control quote" :class="{ 'is-invalid': submitted && !quote }"></textarea>
      </div>
      <div class="form-group">
        <label htmlFor="content">Content</label>
        <textarea type="text" v-model="content" name="content" class="form-control" :class="{ 'is-invalid': submitted && !content }"></textarea>
      </div>
      <div class="form-group">
        <label htmlFor="photo">Photo</label>
        <input type="text" v-model="photo" name="photo" class="form-control" :class="{ 'is-invalid': submitted && !photo }" />
      </div>
      <div class="form-group">
        <label htmlFor="credit">Credit</label>
        <input type="text" v-model="credit" name="credit" class="form-control" :class="{ 'is-invalid': submitted && !credit }" />
      </div>
      <div class="form-group">
        <button :disabled="loading" class="cancel">Cancel</button>
        <button :disabled="loading">Publish</button>
      </div>
      <div v-if="error" class="alert alert-danger">{{error}}</div>
    </form>
  </div>
</template>

<style lang="stylus">
  @import "../assets/styles/common.styl"

  #create{
    h2 {
      color: color-pink;
    }
    form {
      padding: 0 110px;
      .form-group {
        .quote {
          height: 200px;
        }
        .cancel {
          margin-right: 85px;
        }
      }
    }
  }
</style>

<script>
  import { contentService } from '../_services';
  import router from '../router';

  export default {
    data () {
      return {
        title: '',
        quote: '',
        content: '',
        photo: '',
        credit: '',
        submitted: false,
        loading: false,
        error: ''
      }
    },
    methods: {
      handleSubmit (e) {
        this.submitted = true;
        const { title, quote, content, photo, credit } = this;

        // stop here if form is invalid
        if (!(title && quote && content && photo && credit)) {
          return;
        }

        this.loading = true;
        contentService.create(title, quote, content, photo, credit).then(router.push('/blog'));
      }
    }
  };
</script>
