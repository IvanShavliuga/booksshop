<template>
  <div class="wishlist">
  <i class="wishlist__icon"></i>
  <span class="wishlist__counter">20</span>
  <span class="wishlist__title">Wish list</span>
</div>
</template>
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
    font-family: @bodyfont;
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
  }
  &__counter {
    font-size: 13px;
    line-height: 16px;
    color: #ffffff;
    font-family: @bodyfont;
    width: 27px;
    height: 16px;
    border-radius: 8px;
    padding: 3px;
    display: block;
    position: absolute;
    text-align: center;
    top: 35px;
    left: 65px;
    background-color: @bgform;
  }
}
</style>
