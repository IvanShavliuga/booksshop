<template>
  <div class="wishlist">
  <i class="wishlist__icon"></i>
  <span class="wishlist__counter">{{user.like.length}}</span>
  <span class="wishlist__title">Wish list</span>
</div>
</template>
<script>
export default {
  data () {
    return {
      user: {}
    }
  },
  created () {
    this.user = this.$store.getters.user
  }
}
</script>
<style scoped lang="less">
@import '../assets/css/style.less';
.wishlist {
  margin: 5px 15px 5px -35px;
  padding: 10px;
  position: relative;
  &__title {
    font-size: 21px;
    line-height: 26px;
    color: @colform;
    @media (max-width: 800px) {
      display: none;
    }
    @media (max-width: @smalltablet) {
      display: block;
    }
    @media (max-width: @smallphone) {
      display: none;
    }
  }
  &__icon {
    width: 25px;
    height: 25px;
    margin-left: 20px;
    margin-top: 15px;
    margin-bottom: 5px;
    background-image: url('../assets/images/star.svg');
    background-size: 100%;
    display: block;
    @media (min-width: 601px) and (max-width: 800px) {
      margin-left: 0;
    }
    @media (max-width: @smalltablet) {
      display: block;
    }
    @media (max-width: @smallphone) {
      margin-left: -20px;
    }
  }
  &__counter {
    font-size: 13px;
    line-height: 16px;
    color: #ffffff;
    width: 27px;
    height: 16px;
    border-radius: 8px;
    padding: 3px;
    text-align: center;
    .posabsolute(35px, 65px);
    background-color: @bgform;
    @media (min-width: 601px) and (max-width: 800px) {
      .posabsolute(15px, 25px);
    }
    @media (max-width: @smallphone) {
      .posabsolute(15px, 5px);
    }
  }
}
</style>
