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
  &__text {
    font-size: 16px;
    color: #dfebb0;
    word-spacing: 7px;
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
    animation: runstring 4s infinite;
    @media screen and (max-width: 1200px) {
      width: 70%;
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
