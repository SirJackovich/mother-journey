<template>
  <div id="home">
    <div class="boxes">
      <div class="box clients">
        <h2>Clients:</h2>
        <p>Parents, Educators, or Caregivers of people with special needs, and people with special needs.</p>
      </div>
      <div class="box mission">
        <h2>Our Mission:</h2>
        <p>Help people navigate the joys, frustrations, and challenges of life in relation to special needs.</p>
      </div>
      <div class="box services">
        <h2>Services:</h2>
        <p>Provide resources and information, emotional support and comic relief.</p>
      </div>
    </div>
    <button>Learn More</button>
  </div>
</template>

<style lang="stylus">
  @import "../assets/styles/colors.styl"

  #home{
    .boxes {
      display: flex;
      justify-content: space-evenly;
      color: white;
      font-weight: bold;
      text-shadow: 0 0 5px black;
      padding: 40px 0;

      .box {
        border-radius: 25px;
        height: 300px;
        width: 300px;
        text-align: center;
        padding: 40px 10px 10px 10px;

        h2 {
          font-size: 40px;
        }

        p {
          font-size: 24px;
        }
      }

      .clients {
        background-color: color-pink;
      }

      .mission {
        background-color: color-green;
      }

      .services {
        background-color: color-blue;
      }
    }
  }
</style>

<script>
  export default {
  };
</script>
