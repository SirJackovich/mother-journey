<template>
  <div id="home">
    <div class="boxes">
      <div class="box clients">
        <h2>Clients:</h2>
        <p>Parents, Educators, or Caregivers of people with special needs, and people with special needs.</p>
      </div>
      <div class="box mission">
        <h2>Our Mission:</h2>
        <p>Help people navigate the joys, frustrations, and challenges of life in relation to special needs.</p>
      </div>
      <div class="box services">
        <h2>Services:</h2>
        <p>Provide resources and information, emotional support, and comic relief.</p>
      </div>
    </div>
    <router-link class="learn-more button" to="/about" tag="button">Learn More</router-link>
    <div v-if="blogs.length" class="recent">
      <h2>Recent Posts:</h2>
      <div class="blog-boxes">
        <div class="blog-box" v-for="blog in blogs" :key="blog.id" v-on:click="goToBlog(blog.path)">
          <p>{{blog.title}}</p>
          <img :src="'/api/image/' + blog.photo">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
  @import "../assets/styles/common.styl"

  #home{
    .boxes {
      display: flex;
      justify-content: space-evenly;
      color: white;
      font-weight: bold;
      text-shadow: 0 0 5px black;
      padding-bottom: 50px;

      .box {
        border-radius: 15px;
        height: 300px;
        width: 300px;
        padding: 40px 10px 10px 10px;

        h2 {
          padding: 0;
          font-size: 40px;
        }

        p {
          font-size: 24px;
        }
      }

      .clients {
        background-color: color-pink;
      }

      .mission {
        background-color: color-green;
      }

      .services {
        background-color: color-blue;
      }
    }
    .learn-more {
      background-color: color-purple;
    }
    .recent {
      background-color: color-light-blue;
      padding-bottom: 50px;
      h2 {
        font-size: 40px;
        color: white;
        text-align: left;
        padding-left: 110px;
        padding-top: 50px;
      }
      .blog-boxes {
        display: flex;
        justify-content: space-evenly;
        padding-bottom: 40px;
        .blog-box {
          background-color: white;
          padding-bottom: 50px;
          border-radius: 25px;
          width: 40%;
          cursor: pointer;
          p {
            margin: 20px 0;
            font-size: 20px;
          }
          img {
            height: 300px;
            width: 100%;
            object-fit: contain;
          }
        }
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
        blogs: []
      }
    },
    created () {
      blogService.getAll().then(blogs => this.blogs = blogs.reverse().slice(0, 2));
    },
    methods: {
      goToBlog(path){
        router.push(`/blog/${path}`);
      }
    }
  };
</script>
