<template>
  <div id="post">
    <section>
      <h2>
        {{post.title}}
        <button type="submit"><img src="../assets/img/edit-icon.svg"></button>
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
      <p><img class="post-image" :src="post.photo"><span v-html="post.content"></span></p>
      <div class="paging">
        <button class="button" ><img class="arrow left" src="../assets/img/right-arrow.svg">Newer Post</button>
        <button class="button" >Older Post<img class="arrow" src="../assets/img/right-arrow.svg"></button>
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

  #post{
    display: flex;
    flex-flow: row wrap;
    padding: 0 110px;
    section {
      flex: 3 0;
      padding-right: 50px;
      h2 {
        font-size: 40px;
        padding-bottom: 20px;
        button{
          border: none;
          background-color: transparent;
          cursor: pointer;
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
      p {
        text-align: left;
      }
      .post-image {
        max-width: 600px;
        max-height: 600px;
        padding-right: 50px;
        height: inherit;
        float: left;
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
    }
    aside {
      flex: .6 0 0;
      form {
        .form-group {
          margin: 0;
          label {
            padding: 5px 10px;
            font-size: 16px;
            color: white;
            background-color: color-pink;
            border-radius: 10px;
            width: inherit;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            margin: 0;
            height: 34px;
          }
          input {
            font-size: 16px;
            padding: 0;
            padding-left: 5px;
            height: 34px;
            border: none;
            border-bottom: 1px solid color-pink;
            border-top: 1px solid color-pink;
            border-radius: 0;
          }
          button {
            background-color: transparent;
            padding: 0;
            height: 34px;
            border: 1px solid color-pink;
            border-left: none;
            border-radius: 10px;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            cursor: pointer;
            img {
              height: 24px;
            }
          }
        }
        .form-group:hover input,
        .form-group:hover button,
        input:focus ~ button {
          background-color: white;
        }
      }
      .banner {
        border-radius: 15px;
        padding: 40px 10px 10px 10px;
        height: 330px;
        h3 {
          padding-top: 20px;
          padding-bottom: 50px;
        }
      }
      .resources {
        background-color: color-light-blue;
        .button {
          background-color: color-light-blue;
        }
      }
      .about {
        background-color: color-purple;
        .button {
          background-color: color-purple;
        }
      }
      .contact {
        background-color: color-pink;
        .button {
          background-color: color-pink;
        }
      }
    }
  }
</style>

<script>
  import { blogService} from '../_services';
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
          photo: ''
        },
        search: '',
        image: null
      }
    },
    created () {
      blogService.getByPath(this.$route.params.path).then(post => {
        this.post = post;
        this.post.photo = `/api/image/${this.post.photo}`;
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        this.post.createdAt = new Date(this.post.createdAt).toLocaleDateString("en-US", options);
        this.post.content = this.post.content.replace(/(?:\r\n|\r|\n)/g, '<br>');
      });
    },
    methods: {
      handleSubmit (e) {
        this.submitted = true;

        // stop here if form is invalid
        if (!this.search) {
          return;
        }
      }
    },
    components: {
      VueGoodshareFacebook,
      VueGoodshareTwitter,
      VueGoodsharePinterest,
    }
  };
</script>
