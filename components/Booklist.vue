<template>
<div class="list">
  <Book v-for="(i,k) in [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]" :key="i+k"/>
</div>
</template>
<style lang="less">
@import '../assets/css/style.less';

.list {
  border-left: 1px solid @bordercolor;
  border-right: 1px solid @bordercolor;
  border-bottom: 1px solid @bordercolor;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media (max-width: 1060px) {
    width: 87vw;
    margin-left: 20px;
  }
  @media (max-width: 615px) {
    width: 83.5vw;
  }
  @media (max-width: 440px) {
    //width: 75vw;
    margin-left: 20px;
  }
  @media (max-width: 405px) {
    width: 85.5vw;
  }
  @media (max-width: 385px) {
    justify-content: space-around;
    width: 84.5vw;
  }
  @media (max-width: 350px) {
    width: 88vw;
    margin-left: 0;
  }
  @media (max-width: 290px) {
    width: 200px;
    border: none;
  }
  @media (max-width: 240px) {
    width: 150px;
  }
}
</style>
<script>
import Book from '@/components/Book.vue'
export default {
  components: {
    Book
  }
}
</script>
