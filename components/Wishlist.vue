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
    @media screen and (max-width: 800px) {
      display: none;
    }
    @media screen and (max-width: 600px) {
      display: block;
    }
    @media screen and (max-width: 358px) {
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
    @media screen and (min-width: 601px) and (max-width: 800px) {
      margin-left: 0;
    }
    @media screen and (max-width: 600px) {
      display: block;
    }
    @media screen and (max-width: 300px) {
      margin-left: -5px;
    }
    @media screen and (max-width: 250px) {
      margin-left: -65px;
    }
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
    @media screen and (min-width: 601px) and (max-width: 800px) {
      left: 25px;
      top: 15px;
    }
    @media screen and (max-width: 358px) {
      left: 45px;
      top: 15px;
    }
    @media screen and (max-width: 300px) {
      left: 10px;
      top: 15px;
    }
    @media screen and (max-width: 250px) {
      left: -40px;
    }
  }
}
</style>
