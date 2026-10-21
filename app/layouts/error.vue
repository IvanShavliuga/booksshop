<template>
<div class="empty">
  <div class="empty__text">
    <h1 class="empty__title">404</h1>
    <p class="empty__subtitle">page not found</p>
    <nuxt-link class="empty__link" to="/">Home</nuxt-link>
    <div class="empty__text-circle"
      v-for="ind of 11" :key="ind"
      :style="circlegen(ind)">
    </div>
  </div>
</div>
</template>
<script>
export default {
  methods: {
    circlegen (id) {
      return {
        zIndex: 15-id,
        width: (10+id*20)+'px',
        height: (10+id*20)+'px',
        top: (95-id*5)+'px',
        left: (270-id*5)+'px',
        backgroundColor: (id%2)?('#a32739'):('white')
      }
    }
  }
}
</script>
<style scoped lang="less">
@import '../assets/css/style.less';

.empty {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80vh;
  &__text {
    position: relative;
    width: 40vw;
    height: 330px;
    &-circle {
      position: absolute;
      border-radius: 50%;
      display: block;
      font-size: 10px;
      color: red;
    }
  }
  &__title {
    z-index: 20;
    color: @pricecolor;
    font-size: 100px;
    line-height: 50px;
    letter-spacing: 8px;
    margin-bottom: 15px;
  }
  &__subtitle {
    font-size: 22px;
    line-height: 25px;
    margin-top: 25px;
    color: @colform;
    text-transform: uppercase;
  }
  &__link {
    font-size: 20px;
    line-height: 25px;
    margin-top: 15px;
    color: @colform;
    text-transform: uppercase;
  }
}
</style>
