<template>
  <div id="blog">
    <section>
      <h2>Blog</h2>
      <p class="subheading" v-if="query">Blogs containing: {{query}}</p>
      <p class="subheading" v-if="month">{{month}} Blogs</p>
      <p class="subheading" v-if="category">Blogs about {{category}}</p>
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
          <input type="text" v-model="search" name="search" class="form-control" />
          <button type="submit"><img src="../assets/img/search-icon.svg"></button>
        </div>
      </form>
      <mj-list-card title="Categories:" class="categories" :list="categories"></mj-list-card>
      <mj-archive-list-card title="Archive:" class="archive" :list="archive"></mj-archive-list-card>
      <mj-button-card title="Questions or Comments?" class="contact" label="Contact Me" link="/contact"></mj-button-card>
    </aside>
  </div>
</template>

<style lang="stylus">
  @import "../assets/styles/colors.styl"

  #blog {
    display: flex;
    flex-flow: row wrap;
    padding: 0 110px;
    .categories {
      background-color: color-light-blue;
    }
    .archive {
      background-color: color-purple;
    }
    section {
      .subheading {
        text-align:  left;
      }
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
        query: '',
        category: '',
        month: '',
        search: '',
        displayCount: 10
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
        if (!this.search) {
          return;
        }

        router.push({ path: '/blog', query: { query: this.search }})
      },
      goToBlog(path){
        router.push(`/blog/${path}`);
      },
      getBlogs(query){
        this.query =  '';
        this.category = '';
        this.month = '';
        if(query && (query.category || query.query || query.month)){
          if (query.category) {
            this.category = query.category;
            blogService.getByCategory(query.category).then(blogs => this.processBlogs(blogs));
          }else if (query.query) {
            this.query = query.query;
            blogService.find(query.query).then(blogs => this.processBlogs(blogs));
          }else if (query.month) {
            let archiveParts = query.month.match(/[a-zA-Z]+|[0-9]+/g);
            this.month = `${archiveParts[0]} ${archiveParts[1]}`;
            blogService.getByMonth(query.month).then(blogs => this.processBlogs(blogs));
          }
        } else{
          blogService.getAll().then(blogs => this.processBlogs(blogs));
        }
      },
      processBlogs(blogs){
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        for (let i = 0; i < blogs.length; i++) {
          blogs[i].createdAt = new Date(blogs[i].createdAt).toLocaleDateString("en-US", options);
        }
        this.blogs = blogs.reverse();
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
