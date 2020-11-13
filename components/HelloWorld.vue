<template>
  <div class="hello">
    <span class="hello__text">This is portfolio of
      <a href="https://ivanshavliuga.github.io"
         rel="noopener"
          class="hello__text-link"
         target="__blank">
         Ivan Shavliuga (Ivanov) junior vue.js developer
      </a>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Hello'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../assets/css/style.less';

.hello {
  background-color: #9c329a;
  text-align: center;
  height: 20px;
  position: relative;
  @media (max-width: 650px) {
    height: 45px;
  }
  &__text {
    font-size: 16px;
    color: #dfebb0;
    word-spacing: 7px;
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
    animation: runstring 4s infinite;
    @media (max-width: @largetablet) {
      width: 70%;
    }
    @media (max-width: 920px) {
      width: 100%;
    }
    @media (max-width: 650px) {
      height: 45px;
      width: 350px;
      padding: 5px 0;
      //animation: runstringmob 4s infinite;
    }
    @media (max-width: 350px) {
      font-size: 12px;
      width: 250px;
    }
    &-link {
      color: #dfeb21;
      font-weight: bold;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
}
</style>
