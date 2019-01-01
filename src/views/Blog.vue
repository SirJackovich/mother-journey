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
          <input type="text" v-model="query" name="search" class="form-control" />
          <button type="submit"><img src="../assets/img/search-icon.svg"></button>
        </div>
      </form>
      <div class="banner resources">
        <h3 class="categories">Categories:</h3>
        <div class="categories-list">
          <p class="category" v-for="category in categories.slice(0, 10)" :key="category.id" v-on:click="goToCategory(category.name)">{{category.name}}</p>
        </div>
      </div>
      <div class="banner about">
        <h3>To learn more about the author</h3>
        <router-link class="button" to="/about" tag="button">Click Here</router-link>
      </div>
      <div class="banner contact">
        <h3>Questions or Comments?</h3>
        <router-link class="button" to="/contact" tag="button">Contact Me</router-link>
      </div>
    </aside>
  </div>
</template>

<style lang="stylus">
  @import "../assets/styles/colors.styl"

  #blog {
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

        p {
          text-align: left;
        }

        img {
          max-width: 325px;
          float: left;
          height: 200px;
          width: 100%;
          padding-right: 25px;
          object-fit: contain;
        }
      }

      .box:hover {
        background-color: white;
      }
    }

    aside {
      .resources {
        padding-top: 20px;
        .categories {
          padding: 10px 0;
        }
        .categories-list {
          max-height: 250px;
          column-width: 50px;
          .category {
            text-align: left;
            color: white;
            padding-left: 10px;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>

<script>
  import { blogService, categoryService } from '../_services';
  import router from '../router';

  export default {
    data () {
      return {
        blogs: [],
        categories: [],
        query: ''
      }
    },
    created () {
      this.getBlogs(this.$route.query);
      categoryService.getAll().then(categories => this.categories  = categories);
    },
    methods: {
      handleSubmit (e) {
        // stop here if form is invalid
        if (!this.query) {
          return;
        }

        router.push({ path: '/blog', query: { query: this.query }})
      },
      goToBlog(path){
        router.push(`/blog/${path}`);
      },
      goToCategory(category){
        router.push({ path: '/blog', query: { category: category }})
      },
      getBlogs(query){
        if(query && (query.category || query.query)){
          if (query.category) {
            blogService.getByCategory(query.category).then(blogs => {
              let options = { year: 'numeric', month: 'long', day: 'numeric' };
              for (let i = 0; i < blogs.length; i++) {
                blogs[i].createdAt = new Date(blogs[i].createdAt).toLocaleDateString("en-US", options);
              }
              this.blogs = blogs.reverse();
            });

          }else if (query.query) {
            blogService.find(query.query).then(blogs => {
              let options = { year: 'numeric', month: 'long', day: 'numeric' };
              for(let i = 0; i < blogs.length; i++){
                blogs[i].createdAt = new Date(blogs[i].createdAt).toLocaleDateString("en-US", options);
              }
              this.blogs = blogs.reverse();
            });
          }
        } else{
          blogService.getAll().then(blogs => {
            let options = { year: 'numeric', month: 'long', day: 'numeric' };
            for(let i = 0; i < blogs.length; i++){
              blogs[i].createdAt = new Date(blogs[i].createdAt).toLocaleDateString("en-US", options);
            }
            this.blogs = blogs.reverse();
          });
        }
      }
    },
    watch: {
      '$route' (to, from) {
        this.getBlogs(to.query);
      }
    }
  };
</script>
