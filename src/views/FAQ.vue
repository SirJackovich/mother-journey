<template>
  <div id="faq">
    <h2>Frequently Asked Questions</h2>
    <p class="sub-heading">I love to answer readers' questions! Here are a few of the most popular FAQs:</p>
    <div v-for="category in questions" class="category">
      <h3>{{category.title}}</h3>
      <span v-for="question in category.questions" class="qna">
        <p v-on:click="question.showing = !question.showing" class="question" :class="{ 'expanded': question.showing }">{{question.question}}</p>
        <p v-show="question.showing" class="answer">{{question.answer}}</p>
      </span>
    </div>
    <div class="banner">
      <h3>Have a question that is not listed?</h3>
      <router-link class="button" to="/contact" tag="button">Contact Me</router-link>
    </div>
  </div>
</template>

<style lang="stylus">
  @import "../assets/styles/colors.styl"

  #faq{
    h2 {
      color: color-purple;
      font-size: 40px;
      padding-bottom: 0;
    }
    p {
      color: color-purple;
    }
    .sub-heading {
      padding-bottom: 20px;
    }
    .category {
      border-top: 1px color-light-blue solid;
      margin: 0 110px 50px 110px;
      padding-top: 20px;

      * {
        text-align: left;
      }
      h3 {
        color: color-light-blue;
        padding-bottom: 20px;
      }
      .qna {
        .question {
          padding-left: 50px;
          cursor: pointer;
          color: color-pink;
        }
        .question:hover,
        .expanded {
          text-decoration: underline;
        }
        .answer {
          padding-left: 100px;
        }
      }
    }
    .banner {
      background-color: color-green;
      .button {
        background-color: color-green;
      }
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        questions: [
          {
            title: "Special Needs",
            questions: [
              {
                question: "What is the most important thing that you wish you had known sooner as a parent of a child with special needs?",
                answer: "I wish I would have know more of my options with the school system. I had no idea what my options were, and it seemed almost like it was a secret.",
                showing: false
              }
            ]
          },
          {
            title: "School System",
            questions: [
              {
                question: "How often should you communicate with your student’s teacher and others involved in your child’s educational plan?",
                answer: "IEPs and 504 Plans are renewed yearly. If changes are needed, the plans can be visited at any point one of the adults involved deems necessary. " +
                  "If you start at the beginning with open communication, the child will have a more successful year.",
                showing: false
              }
            ]
          },
          {
            title: "Personal",
            questions: [
              {
                question: "How do you survive with 9 kids and some of them with special needs?",
                answer: "One day at a time. Sometimes it seems like one hour at a time. I try to love everyone where they are.",
                showing: false
              },
              {
                question: "How did you feel when your son was diagnosed with autism?",
                answer: "Even though we knew that something was different about him, it was still a shock when he was diagnosed. " +
                  "I think it was hard hearing it, even though we lived it every day. " +
                  "Once we got over the initial shock, we went into the grieving process, " +
                  "trying to process how his life would be different and how the things you hope for your children may not happen with him. " +
                  "Then we tried to learn anything and everything we could about autism. We wanted to help him as best as we could. Knowledge is power.",
                showing: false
              },
              {
                question: "Where did you find information?",
                answer: "I started at the library. We checked out a bunch of books and started reading them. " +
                  "Some were way too advanced for me, so I would try something different. I wanted to help him the best that I could. " +
                  "I would also talk to people. You can learn some amazing things by listening to other people’s stories.",
                showing: false
              }
            ]
          }
        ]
      }
    }
  };
</script>
