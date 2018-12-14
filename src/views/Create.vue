<template>
  <div id="create">
    <h2>Create</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" v-model="title" name="title" class="form-control" :class="{ 'is-invalid': submitted && !title }" />
      </div>
      <div class="form-group">
        <label htmlFor="quote">Quote</label>
        <textarea type="text" v-model="quote" name="quote" class="form-control quote" :class="{ 'is-invalid': submitted && !quote }"></textarea>
      </div>
      <div class="form-group">
        <label htmlFor="content">Content</label>
        <textarea type="text" v-model="content" name="content" class="form-control" :class="{ 'is-invalid': submitted && !content }"></textarea>
      </div>
      <div class="form-group">
        <label htmlFor="photo">Photo</label>
        <vue-dropzone ref="myVueDropzone" id="dropzone" @vdropzone-complete="afterComplete" name="photo" class="form-control" :options="dropzoneOptions"></vue-dropzone>
      </div>
      <div class="form-group">
        <label htmlFor="credit">Credit</label>
        <input type="text" v-model="credit" name="credit" class="form-control" :class="{ 'is-invalid': submitted && !credit }" />
      </div>
      <div class="form-group">
        <button :disabled="loading" type='button' class="cancel button">Cancel</button>
        <button :disabled="loading" class="button" >Publish</button>
      </div>
      <div v-if="error" class="alert alert-danger">{{error}}</div>
    </form>
  </div>
</template>

<style lang="stylus">
  @import "../assets/styles/common.styl"

  #create{
    h2 {
      color: color-pink;
    }
    form {
      padding: 0 110px;
      .form-group {
        .quote {
          height: 200px;
        }
        .cancel {
          margin-right: 85px;
        }
        .vue-dropzone {
          height: 100%;
          background-image: url(../assets/img/upload-arrow.png);
          background-repeat: no-repeat;
          background-position: center 20%;
          background-size: 50px;
          text-align: center;
          .upload {
            margin-top: 100px;
            background-color: color-light-blue;
          }
          p {
            color: color-pink;
            font-size: 18px;
          }
        }
        .vue-dropzone.dz-started {
          background-image: none;
        }
      }
    }
  }
</style>

<script>
  import { blogService } from '../_services';
  import { authHeader} from '../_helpers';
  import vue2Dropzone from 'vue2-dropzone';
  import 'vue2-dropzone/dist/vue2Dropzone.min.css';

  export default {
    components: {
      vueDropzone: vue2Dropzone
    },
    data () {
      return {
        dropzoneOptions: {
          headers: { 'Authorization': authHeader()},
          url: 'api/image/',
          addRemoveLinks: true,
          autoProcessQueue: false,
          maxFiles: 1,
          acceptedFiles: 'image/*',
          dictDefaultMessage: "<button class='button upload' type='button'>Upload Photo</button><p>Or drag photo here</p>"
        },
        title: '',
        quote: '',
        content: '',
        credit: '',
        path: '',
        submitted: false,
        loading: false,
        error: ''
      }
    },
    methods: {
      handleSubmit (e) {
        this.submitted = true;

        // stop here if form is invalid
        if (!(this.title && this.quote && this.content)) {
          return;
        }

        this.loading = true;
        this.$refs.myVueDropzone.processQueue();
      },
      afterComplete(file) {
        let photo = file.xhr.response;
        this.path = this.title.toLowerCase().replace(/\s+/g, '-');
        blogService.create(this.title, this.quote, photo, this.content, this.credit, this.path);
      }
    }
  };
</script>
