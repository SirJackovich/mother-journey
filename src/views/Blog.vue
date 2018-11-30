<template>
  <div>
    <h2>Blog</h2>
    <em v-if="blogs.loading">Loading blogs...</em>
    <ul v-if="blogs.length">
      <div v-for="blog in blogs" :key="blog.id">
        <h3>{{blog.title}}</h3>
        <p>{{blog.body}}</p>
      </div>
    </ul>
  </div>
</template>

<script>
  import { contentService } from '../_services';
  export default {
    data () {
      return {
        blogs: []
      }
    },
    created () {
      this.blogs.loading = true;
      contentService.getAll().then(blogs => this.blogs = blogs.reverse());
    }
  };
</script>
