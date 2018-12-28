<template>
  <div id="blog">
    <section>
      <h2>Blog</h2>
      <div class="box" v-for="blog in blogs" :key="blog.id" v-on:click="goToBlog(blog.path)">
        <img :src="`/api/image/${blog.photo}`">
        <p>{{blog.title}}</p>
        <p>{{blog.createdAt}}</p>
        <p>{{blog.quote}}</p>
      </div>
    </section>
    <aside>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label htmlFor="search">Search</label>
          <input type="text" v-model="search" name="search" class="form-control" />
          <button type="submit"><img src="../assets/img/search-icon.svg"></button>
        </div>
      </form>
      <div class="banner resources">
        <h3>Want a list of additional resources?</h3>
        <router-link class="button" to="/resources" tag="button">Resources</router-link>
      </div>
      <div class="banner about">
        <h3>To learn more about the author</h3>
        <router-link class="button" to="/about" tag="button">Click Here</router-link>
      </div>
      <div class="banner contact">
        <h3>Have questions or comments?</h3>
        <router-link class="button" to="/contact" tag="button">Contact Me</router-link>
      </div>
    </aside>
  </div>
</template>

<style lang="stylus">
  @import "../assets/styles/common.styl"

  #blog{
    display: flex;
    flex-flow: row wrap;
    padding: 0 110px;
    section {
      .box {
        cursor: pointer;
        border: 1px solid color-green;
        border-radius: 25px;
        padding: 20px;
        overflow: auto;
        margin-bottom: 50px;
        p{
          text-align: left;
        }
        img {
          max-width: 325px;
          float: left;
          height: 200px;
          width: 100%;
          padding-right: 25px;
          object-fit: cover;
        }
      }
      .box:hover {
        background-color: white;
      }
    }
  }
</style>

<script>
  import { blogService } from '../_services';
  import router from '../router';

  export default {
    data () {
      return {
        blogs: [],
        search: ''
      }
    },
    created () {
      blogService.getAll().then(blogs => {
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        for(let i = 0; i < blogs.length; i++){
          blogs[i].createdAt = new Date(blogs[i].createdAt).toLocaleDateString("en-US", options);
        }
        this.blogs = blogs.reverse();
      });
    },
    methods: {
      handleSubmit (e) {
        this.submitted = true;

        // stop here if form is invalid
        if (!this.search) {
          return;
        }
      },
      goToBlog(path){
        router.push(`/blog/${path}`);
      }
    }
  };
</script>
