<template>
  <div id="post">
    <section>
      <h2>
        {{post.title}}
        <button v-if="isLoggedIn" v-on:click="edit"><img src="../assets/img/edit-icon.svg"></button>
      </h2>
      <p>{{post.quote}}</p>
      <p class="date">
        <span>Published on: {{post.createdAt}}</span>
        <span>
          <vue-goodshare-facebook has_icon>
          </vue-goodshare-facebook>
          <vue-goodshare-twitter has_icon>
          </vue-goodshare-twitter>
          <vue-goodshare-pinterest has_icon>
          </vue-goodshare-pinterest>
        </span>
      </p>
      <p class="content">
        <span class="post-image">
          <img  :src="post.photo" :alt="post.alt">
          <small>{{post.credit}}</small>
        </span>
        <span v-html="post.content"></span>
      </p>

      <p class="categories" v-if="post.categories.length">
        Categories: <a class="category" v-for="category in post.categories" :key="category.id" v-on:click="goToCategory(category.name)">{{category.name}} </a>
      </p>
      <div class="paging" :class="{ 'older': !post.newer }">
        <router-link v-if="post.newer" :to="post.newer" tag="button" class="button" ><img class="arrow left" src="../assets/img/right-arrow.svg">Newer Post</router-link>
        <router-link v-if="post.older" :to="post.older" tag="button" class="button" >Older Post<img class="arrow" src="../assets/img/right-arrow.svg"></router-link>
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
      <div class="card resources">
        <h3>Want a list of additional resources?</h3>
        <div class="footer">
          <router-link class="button" to="/resources" tag="button">Resources</router-link>
        </div>
      </div>
      <div class="card about">
        <h3>To learn more about the author</h3>
        <div class="footer">
          <router-link class="button" to="/about" tag="button">Click Here</router-link>
        </div>
      </div>
      <div class="card contact">
        <h3>Questions or Comments?</h3>
        <div class="footer">
          <router-link class="button" to="/contact" tag="button">Contact Me</router-link>
        </div>

      </div>
    </aside>
  </div>
</template>

<style lang="stylus">
  @import "../assets/styles/colors.styl"

  #post{
    display: flex;
    flex-flow: row wrap;
    padding: 0 110px;
    section {
      h2 {
        font-size: 40px;
        padding-bottom: 20px;
        button{
          border: none;
          background-color: transparent;
          cursor: pointer;
          position: absolute;
          img {
            height: 35px;
          }
        }
      }
      .date {
        text-align: left;
        border-top: 1px solid color-pink;
        border-bottom: 1px solid color-pink;
        display: flex;
        align-items: center;
        justify-content: space-between;
        a {
          color: white;
        }
      }
      .content {
        text-align: left;
      }
      .post-image {
        float: left;
        img {
          max-width: 600px;
          max-height: 600px;
          padding-right: 50px;
          height: inherit;
        }
        small {
          font-size: 14px;
          font-weight: inherit;
          display: block;
          text-align: left;
          padding-top: 10px;
        }
      }
      .categories {
        text-align: left;
        .category {
          cursor: pointer;
        }
      }
      .paging {
        display: flex;
        justify-content: space-between;
        button {
          background-color: color-green;
          padding: 0;
          .arrow {
            height: 20px;
            padding-left: 10px;
            padding-bottom: 3px;
          }
          .left {
            transform: rotate(180deg);
            padding-top: 3px;
            padding-bottom: 0;
          }
        }
      }
      .paging.older {
        justify-content: flex-end;
      }
    }
  }
</style>

<script>
  import { blogService} from '../_services';
  import router from '../router';
  import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
  import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";
  import VueGoodsharePinterest from "vue-goodshare/src/providers/Pinterest.vue";

  export default {
    data () {
      return {
        post: {
          author: '',
          categories: [],
          content: '',
          createdAt: '',
          title: '',
          quote: '',
          credit: '',
          photo: '',
          older:'',
          newer:'',
          alt: ''
        },
        query: '',
        image: null,
        user: null
      }
    },
    created () {
      this.getPost(this.$route.params.path);
      try {
        this.user = JSON.parse(sessionStorage.getItem('user'));
      }catch (e) {
        console.error(e);
      }
    },
    methods: {
      handleSubmit (e) {
        // stop here if form is invalid
        if (!this.query) {
          return;
        }

        router.push({ path: '/blog', query: { query: this.query }})
      },
      edit (){
        router.push({ path: '/blog/create', query: { path: this.post.path }})
      },
      getPost(path){
        blogService.getByPath(path).then(post => {
          if(post === "Not Found"){
            router.push('/blog');
          }else{
            this.post = post;
            this.post.photo = `/api/image/${this.post.photo}`;
            let options = { year: 'numeric', month: 'long', day: 'numeric' };
            this.post.createdAt = new Date(this.post.createdAt).toLocaleDateString("en-US", options);
            this.post.content = this.post.content.replace(/(?:\r\n|\r|\n)/g, '<br>');
          }
        });
      },
      goToCategory(category){
        router.push({ path: '/blog', query: { category: category }})
      }
    },
    computed: {
      isLoggedIn: function() {
        return !!this.user;
      }
    },
    components: {
      VueGoodshareFacebook,
      VueGoodshareTwitter,
      VueGoodsharePinterest,
    },
    watch: {
      '$route' (to, from) {
        this.getPost(to.params.path);
      }
    }
  };
</script>
