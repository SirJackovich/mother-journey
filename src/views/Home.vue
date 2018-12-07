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
        <p>Provide resources and information, emotional support and comic relief.</p>
      </div>
    </div>
    <router-link class="learn-more" to="/about" tag="button">Learn More</router-link>
    <div>
      <h2 v-if="blogs.length" >Recent Posts:</h2>
      <div class="blog-box" v-for="blog in blogs" :key="blog.id">
        <p>{{blog.title}}</p>
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
  }
</style>

<script>
  import { contentService } from '../_services';

  export default {
    data () {
      return {
        blogs: []
      }
    },
    created () {
      contentService.getAll().then(blogs => this.blogs = blogs.reverse().slice(0, 2));
    }
  };
</script>
