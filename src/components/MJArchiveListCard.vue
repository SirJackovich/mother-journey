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
  import router from '../router';
  import MJListCard from "./MJListCard";

  export default {
    // inheritance
    extends: MJListCard,
    props:{
      list: null
    },
    methods: {
      moreItems (){
        this.displayCount += 10;
      },
      //polymorphism
      goToItem(item){
        router.push({ path: '/blog', query: { month: item.month + item.year }})
      },
      //polymorphism
      getItemLabel(item){
        return `${item.month} ${item.year} (${item.count})`;
      },
    },
    data () {
      return {
        displayCount: 10
      }
    }
  }
</script>
