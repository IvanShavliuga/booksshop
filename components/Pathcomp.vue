<template>
<div class="path">
  <div class="path__wrapper">
    <div class="path__line">
      <span v-for="(p,k) in arr" :key="k">
        <a class="path__line-link" :href="'/'+p">{{(p=='')?'home':p}}</a>
        »
      </span>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      arr: []
    }
  },
  mounted () {
    this.arr = this.$route.fullPath.split('/')
  }
}
</script>
<style scoped lang="less">
@import '../assets/css/style.less';
.path {
  width: 90vw;
  margin: 0 auto;
  &__wrapper {
    .wrapper();
  }
  &__line {
    margin: 15px 0;
    height: 24px;
    padding: 5px 20px;
    border-radius: 4px;
    border: 1px solid @bordercolor;
    box-shadow: 0 0 1px 1px #ddd;
    &-link {
      font-size: @fontsmallsize;
      color: @pathcolor;
      text-decoration: none;
    }
  }
}
</style>
