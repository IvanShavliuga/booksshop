<template>
  <div class="cart">
    <i class="cart__icon">&nbsp;</i>
    <span class="cart__title">
      Your cart
      <button class="cart__counter">
        (2 items)
      </button>
    </span>
    <span class="cart__total">
      $125.0
    </span>
    <button class="cart__check">
      Checkout
    </button>
  </div>
</template>
<style scoped lang="less">
@import '../assets/css/style.less';
.cart {
  //margin: 20px 1px;
  width: 195px;
  height: 90px;
  padding-right: 1px;
  border-right: 1px solid #ccc;
  position: relative;
  @media screen and (max-width: 1130px) {
    border-right: none;
  }
  @media screen and (max-width: 740px) {
    width: 140px;
  }
  @media screen and (max-width: 655px) {
    width: 110px;
  }
  &__icon {
    background-image: url('../assets/images/cart.svg');
    background-size: 100%;
    width: 29px;
    height: 31px;
    display: block;
    position: absolute;
    z-index: 20;
    top: 11px;
    left: -13px;
    @media screen and (max-width: 740px) {
      left: -3px;
    }
    @media screen and (max-width: 655px) {
      display: none;
    }
  }
  &__title {
    font-size: 23px;
    line-height: 56px;
    font-family: @bodyfont;
    color: #6d6d6d;
    display: inline-block;
    margin-left: 27px;
    word-spacing: -1px;
    @media screen and (max-width: 740px) {
      display: none;
    }
  }
  &__counter {
    font-size: 16px;
    color: #6d6d6d;
    border: none;
    margin-left: -5px;
    display: inline-block;
    background-color: transparent;
    /*@media screen and (max-width: 740px) {
      display: block;
      position: absolute;
      left: 20px;
      top: 35px;
    }*/
  }
  &__total {
    font-size: 27px;
    line-height: 0;
    padding: 2px;
    margin-left: -10px;
    display: inline-block;
    color: @colform;
    font-weight: bold;
    font-family: @bodyfont;
    @media screen and (max-width: 740px) {
      display: block;
      position: absolute;
      left: 35px;
      top: 25px;
    }
    @media screen and (max-width: 655px) {
      left: 5px;
    }
  }
  &__check {
    background-image: linear-gradient(0deg, #242424 0%, #424242 100%);
    border: 1px solid #232323;
    font-size: 15px;
    line-height: 0;
    display: inline-block;
    transform: scaleY(1.2);
    margin-left: 15px;
    padding: 12px 15px;
    color: #ffffff;
    font-family: @bodyfont;
    @media screen and (max-width: 740px) {
      display: block;
      position: absolute;
      left: 15px;
      top: 45px;
    }
    @media screen and (max-width: 655px) {
      left: -20px;
    }
  }
}
</style>
