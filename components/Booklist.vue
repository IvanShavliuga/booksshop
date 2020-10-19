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
  @media screen and (max-width: 1060px) {
    width: 87vw;
    margin-left: 20px;
  }
  @media screen and (max-width: 500px) {
    width: 87vw;
  }
  @media screen and (max-width: 488px) {
    justify-content: space-between;
  }
  @media screen and (max-width: 440px) {
    margin-left: 20px;
    width: 85vw;
  }
  @media screen and (max-width: 370px) {
    width: 81vw;
  }
  @media screen and (max-width: 338px) {
    justify-content: center;
  }
  @media screen and (max-width: 300px) {
    width: 77vw;
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
