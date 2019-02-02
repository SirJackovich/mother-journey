<template>
  <div id="mj-card" class="card">
    <h3>{{title}}</h3>
    <div class="list">
      <a class="item" v-for="item in list.slice(0, displayCount)" :key="item.id" v-on:click="goToItem(item)">{{getItemLabel(item)}}</a>
      <a class="item" v-on:click="moreItems()" v-if="displayCount < list.length">More...</a>
    </div>
  </div>
</template>

<style lang="stylus">
  @import "../assets/styles/colors.styl"
</style>
<script>
  import MJCard from './MJCard.vue';
  import router from '../router';

  export default {
    // inheritance
    extends: MJCard,
    props:{
      list: null
    },
    methods: {
      moreItems (){
        this.displayCount += 10;
      },
      //polymorphism
      goToItem(item){
        router.push({ path: '/blog', query: { category: item.name }})
      },
      //polymorphism
      getItemLabel(item){
        return item.name;
      },
    },
    data () {
      return {
        displayCount: 10
      }
    }
  }
</script>
