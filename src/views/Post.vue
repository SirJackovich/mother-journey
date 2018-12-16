<template>
  <div id="post">
    <h2>{{post.title}}</h2>
    <img :src="post.photo">
  </div>
</template>

<style lang="stylus">
  @import "../assets/styles/common.styl"

  #post{

  }
</style>

<script>
  import { blogService} from '../_services';
  export default {
    data () {
      return {
        post: {
          author: '',
          categories: [],
          body: '',
          published: '',
          title: '',
          quote: '',
          credit: '',
          photo: ''
        },
        image: null
      }
    },
    created () {
      blogService.getByPath(this.$route.params.path).then(post => {
        this.post = post;
        this.post.photo = `/api/image/${this.post.photo}`;
      });
    }
  };
</script>
