<template>
  <div id="about">
    <h2>This Mother's Journey</h2>
    <div class="content">
      <p  class="purpose">
        The purpose of this website is to provide resources and information, emotional support and comic relief for parents,
        educators, or caregivers of people with special needs as well as individuals with special needs.
        My hope is that through the resources and information provided on this website, people will be better
        able to navigate the joys, frustrations, and challenges of life in relation to special needs.
      </p>
      <div class="about-me">
        <img src="../assets/img/family.jpg" alt="My family posing on a stair case for a family photo">
        <div>
          <h2 class="about-me-header">About Me</h2>
          <p>
            I married a wonderful man over 30 years ago.
            We have nine wonderful children five of which have married wonderful people.
            That doesn't mean that everything is wonderful all the time.
            There are always difficult times.
            I love helping people and try to make people's burden a little bit lighter.
            If I can do this with knowledge that I have, then that is a bonus.
            I love my family and my life revolves around them.
          </p>
        </div>
      </div>
    </div>
    <div class="banner">
      <h3>Questions or Comments?</h3>
      <router-link class="button" to="/contact" tag="button">Contact Me</router-link>
    </div>
  </div>
</template>

<style lang="stylus">
  @import "../assets/styles/colors.styl"

  #about{
    h2 {
      color: color-purple;
      font-size: 40px;
    }
    .content {
      padding: 0 110px;
      p {
        text-align: left;
        color: color-pink;
        padding-bottom: 50px;
      }
      .purpose {
        padding-bottom: 50px;
      }
      .about-me {
        display:flex;
        align-items: start;
        img {
          width: 600px;
          padding-right: 50px;
          flex-grow:0;
          flex-shrink:0;
        }
        .about-me-header {
          padding-bottom: 0;
        }
      }
    }
    .banner {
      background-color: color-light-blue;
      .button {
        background-color: color-light-blue;
      }
    }
  }
</style>

<script>
  export default {

  };
</script>
