<template>
<div class="list">
  <Book v-for="(i,k) in [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]" :key="i+k"/>
</div>
</template>
<style lang="less">
@import '../assets/css/style.less';

.list {
  border: 1px solid @bordercolor;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
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
