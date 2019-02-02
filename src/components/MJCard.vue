<template>
  <div id="mj-card" class="card">
    <h3>{{title}}</h3>
  </div>
</template>

<style lang="stylus">
  @import "../assets/styles/colors.styl"
  #mj-card{

  }
</style>
<script>
  export default {
    props: {
      title: ''
    }
  };
</script>
