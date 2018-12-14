<template>
  <div>
    <h2>{{post.title}}</h2>
    <img :src="post.photo">
  </div>
</template>

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
