<template>
  <div id="resources">
    <h2>Resources</h2>
    <div v-for="resource in resources" :key="resource.id">
      <a :href="resource.link" target="_blank">
        <div class="box">
          <img :src="resource.image"><p>{{resource.title}}</p>
        </div>
      </a>
      <p>{{resource.description}}</p>
    </div>


  </div>
</template>

<style lang="stylus">
  @import "../assets/styles/common.styl"
  #resources{
    a {
      .box {
        border: 1px solid color-green;
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
            image: require("../assets/img/uvpediatrics-logo.jpeg"),
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
