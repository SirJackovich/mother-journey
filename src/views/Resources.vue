<template>
  <div id="resources">
    <h2>Resources</h2>
    <div class="resource" v-for="resource in resources" :key="resource.id">
      <a class="box" :href="resource.link" target="_blank">
        <div class="image">
          <img :src="resource.image">
        </div>
        <p>{{resource.title}}</p>
      </a>
      <p class="description">{{resource.description}}</p>
    </div>
  </div>
</template>

<style lang="stylus">
  @import "../assets/styles/common.styl"
  #resources{
    h2 {
      color: color-blue;
    }
    .resource {
      margin-bottom: 50px;
      display: flex;
      align-items: center;
      padding: 0 110px;
      height: 200px;
      .box {
        border: 1px solid color-green;
        border-radius: 25px;
        margin-right: 25px;
        padding: 10px;
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        .image {
          width: calc(50% - 25px)
          margin-right: 25px;
          height: 100%;
          display: flex;
          align-items: center;
          img {
            max-width: 100%;
            max-height: 100%;
          }
        }
        p {
          text-align: center;
          color: black;
          font-weight: bold;
          margin: 0;
        }
      }
      .box:hover {
        background-color: white;
        text-decoration: none;
      }
      .description {
        color: color-blue;
        text-align: left;
        margin: 0;
        width: 50%;
      }
    }
  }
</style>
<script>
  export default {
    data() {
      return {
        resources: [
          {
            title: "Utah Valley Pediatrics",
            image: require("../assets/img/uvpediatrics-logo.png"),
            link: "https://www.uvpediatrics.com",
            description: "We have been going to this clinic for over 30 years. Lots of useful information on this website."
          },
          {
            title: "Provo School District",
            image: require("../assets/img/pcsd.png"),
            link: "https://provo.edu/special-education",
            description: "Basic useful information from Provo School District."
          },
          {
            title: "Carson Smith Scholarship",
            image: require("../assets/img/usbe-logo.png"),
            link: "https://www.schools.utah.gov/specialeducation/resources/scholarships",
            description: "A Utah based scholarship for children with special needs. Look for a scholarship near you."
          },
          {
            title: "Understanding Special Education",
            image: require("../assets/img/Understood-logo.png"),
            link: "https://www.understood.org/en/school-learning/special-services/special-education-basics/understanding-special-education",
            description: "A very informative site that gives the basics of special education."
          }
        ]
      }
    }
  };
</script>
