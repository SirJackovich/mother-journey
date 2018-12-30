<template>
  <div id="create">
    <h2 v-if="!edit">Create</h2>
    <h2 v-else>Edit</h2>
    <div v-if="error" class="alert alert-danger">{{error}}</div>
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
        <label htmlFor="categories">Categories</label>
        <multiselect
          v-model="categories"
          name="categories"
          label="name"
          track-by="name"
          tag-placeholder=""
          placeholder="Search or add a category"
          :taggable="true"
          :show-labels="false"
          @tag="addCategory"
          :options="categoryOptions"
          :multiple="true"
          :class="{ 'is-invalid': submitted && !categories }" ></multiselect>
      </div>

      <div class="form-group">
        <router-link v-if="!edit" :disabled="loading" type="button" to="/blog" tag="button" class="cancel button">Cancel</router-link>
        <button v-else :disabled="loading" type="button" class="cancel button" v-on:click="remove">Delete</button>
        <button v-if="!edit" :disabled="loading" class="button" >Publish</button>
        <button v-else :disabled="loading" class="button" >Save</button>
      </div>
    </form>
  </div>
</template>

<style lang="stylus">
  @import "../assets/styles/common.styl"

  #create{
    h2 {
      color: color-pink;
      font-size: 40px;
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
          }
        }
        .vue-dropzone.dz-started {
          background-image: none;
        }
        .multiselect__option--highlight,
        .multiselect__tag {
          background-color: color-green
        }
      }
    }
  }
</style>

<script>
  import { blogService, imageService, categoryService } from '../_services';
  import { authHeader, formatBytes } from "../_helpers";
  import router from '../router';
  import vue2Dropzone from 'vue2-dropzone';
  import 'vue2-dropzone/dist/vue2Dropzone.min.css';
  import Multiselect from 'vue-multiselect';
  import "vue-multiselect/dist/vue-multiselect.min.css";

  export default {
    components: {
      vueDropzone: vue2Dropzone,
      Multiselect
    },
    data () {
      return {
        dropzoneOptions: {
          headers: { 'Authorization': authHeader()},
          url: '/api/image/',
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
        categories: [],
        categoryOptions: [],
        path: '',
        submitted: false,
        loading: false,
        edit: false,
        error: '',
        post: null,
        older: '',
        newer:''
      }
    },
    created () {
      categoryService.getAll().then(categories => this.categoryOptions = categories);
      if (this.$route.query.path) {
        this.edit = true;
        blogService.getByPath(this.$route.query.path).then(post => {
          this.post = post;
          this.title = post.title;
          this.quote = post.quote;
          this.content = post.content;
          this.credit = post.credit;
          this.categories = post.categories;
          this.path = post.path;
          this.older = post.older;
          this.newer = post.newer;
          imageService.info(post.photo).then(image => {
              let file = {};
              file.size = image.length;
              file.type = image.contentType;
              this.$refs.myVueDropzone.manuallyAddFile(file, `/api/image/${post.photo}`);
            }
          );

        });
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
        this.path = this.title.toLowerCase().replace(/\s+/g, '-');

        if(this.$refs.myVueDropzone.getQueuedFiles().length > 0){
          this.$refs.myVueDropzone.processQueue();
        }else{
          this.updateOrCreate();
        }
      },
      afterComplete(file) {
        if( file && !file.manuallyAdded){
          this.updateOrCreate(file);
        }
      },
      updateOrCreate(file){
        if(this.edit){
          if(file){
            blogService.update(this.title, this.quote, file.xhr.response, this.content, this.credit, this.categories, this.path, this.older, this.newer).then(
              router.push(`/blog/${this.path}`)
            );
          }else{
            blogService.update(this.title, this.quote, this.post.photo, this.content, this.credit, this.categories, this.path, this.older, this.newer).then(
              router.push(`/blog/${this.path}`)
            );
          }
        }else{
          blogService.getNewest().then(blog => {
            if (blog) {
              blogService.update(blog.title, blog.quote, blog.photo, blog.content, blog.credit, blog.categories, blog.path, blog.older, this.path).then(
                blogService.create(this.title, this.quote, file.xhr.response, this.content, this.credit, this.categories, this.path, blog.path).then(
                  router.push(`/blog/${this.path}`)
                )
              )
            } else {
              blogService.create(this.title, this.quote, file.xhr.response, this.content, this.credit, this.categories, this.path, '').then(
                router.push(`/blog/${this.path}`)
              )
            }
          });
        }
      },
      remove(){
        if (confirm("Are you sure you want to delete this blog post? (This action cannot be undone)")) {
          blogService.remove(this.path).then(
            router.push('/blog')
          );
        }
      },
      addCategory (newCategory) {
        categoryService.create(newCategory);
        const category = {
          name: newCategory
        };
        this.categoryOptions.push(category);
        this.categories.push(category);
      }
    }
  };
</script>
