<template>
  <div>
    <h2>Create</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" v-model="title" name="title" class="form-control" :class="{ 'is-invalid': submitted && !title }" />
        <div v-show="submitted && !title" class="invalid">Title is required</div>
      </div>
      <div class="form-group">
        <label htmlFor="body">Body</label>
        <input type="text" v-model="body" name="body" class="form-control" :class="{ 'is-invalid': submitted && !body }" />
        <div v-show="submitted && !body" class="invalid">Body is required</div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" :disabled="loading">Create</button>
        <img v-show="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
      </div>
      <div v-if="error" class="alert alert-danger">{{error}}</div>
    </form>
  </div>
</template>

<script>
  import { contentService } from '../_services';
  import router from '../router';

  export default {
    data () {
      return {
        title: '',
        body: '',
        submitted: false,
        loading: false,
        error: ''
      }
    },
    methods: {
      handleSubmit (e) {
        this.submitted = true;
        const { title, body } = this;

        // stop here if form is invalid
        if (!(title && body)) {
          return;
        }

        this.loading = true;
        contentService.create(title, body).then(content => {
          router.push('/blog');
        });
      }
    }
  };
</script>
