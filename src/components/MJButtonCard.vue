<template>
  <div id="mj-card" class="card">
    <h3>{{title}}</h3>
    <div class="footer">
      <router-link class="button" :to="link" tag="button">{{label}}</router-link>
    </div>
  </div>
</template>

<style lang="stylus">
  @import "../assets/styles/colors.styl"
</style>
<script>
  import MJCard from './MJCard.vue';
  export default {
    // inheritance
    extends: MJCard,
    props:{
      label: '',
      link: ''
    }
  }
</script>
