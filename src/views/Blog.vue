<template>
  <div id="blog">
    <section>
      <h2>Blog</h2>
      <div class="box" v-for="blog in blogs" :key="blog.id" v-on:click="goToBlog(blog.path)">
        <img :src="`/api/image/${blog.photo}`" :alt="blog.alt">
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
        <div class="list">
          <a class="item" v-for="category in categories.slice(0, 14)" :key="category.id" v-on:click="goToCategory(category.name)">{{category.name}}</a>
        </div>
      </div>
      <div class="banner archive">
        <h3>Archive:</h3>
        <div class="list">
          <a class="item" v-for="item in archive" :key="item.id" v-on:click="goToMonth(item)">{{item.month}} {{item.year}} ({{item.count}})</a>
        </div>
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
      .list {
        max-height: 250px;
        column-width: 100px;
        .item {
          text-align: left;
          color: white;
          padding-left: 10px;
          margin-bottom: 5px;
          cursor: pointer;
        }
      }
      .resources {
        padding-top: 15px;
        .categories {
          padding: 10px 0;
        }
      }
      .archive {
        background-color: color-purple;
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
        archive: [],
        query: ''
      }
    },
    created () {
      this.getBlogs(this.$route.query);
      categoryService.getAll().then(categories => this.categories  = categories);
      blogService.getArchive().then(archive => {
        this.archive = this.processArchive(archive);
      });
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
      goToMonth(archive){
        router.push({ path: '/blog', query: { month: archive.month + archive.year }})
      },
      getBlogs(query){
        if(query && (query.category || query.query || query.month)){
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
          }else if (query.month) {
            blogService.getByMonth(query.month).then(blogs => {
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
      },
      processArchive(archive){
        const months = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
        for(let i = 0; i < archive.length; i++){
          archive[i] = {count: archive[i].count, month: months[archive[i]._id.month - 1], year: archive[i]._id.year};
        }
        return archive;
      }
    },
    watch: {
      '$route' (to, from) {
        this.getBlogs(to.query);
      }
    }
  };
</script>
