<template>
<div class="list">
  <Book v-for="(b,k) in books" :key="b.id+k" :book="b"/>
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
  @media (max-width: 395px) {
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
  },
  data () {
    return {
      books: []
    }
  },
  created () {
    this.books = this.$store.getters.books
  }
}
</script>
