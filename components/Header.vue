<template>
  <header class="header">
    <Userstatus/>
    <div class="header__baseblock">
      <div class="header__wrapper">
        <div class="header__searchpanel">
          <div class="header__searchpanel-logo">
          </div>
          <Search/>
          <div class="header__cart">
            <i class="header__cart-icon">&nbsp;</i>
            <span class="header__cart-title">
              Your cart
              <button class="header__cart-counter">
                (2 items)
              </button>
            </span>
            <span class="header__cart-total">
              $125.0
            </span>
            <button class="header__cart-check">
              Checkout
            </button>
          </div>
          <div class="header__wishlist">
            <i class="header__wishlist-icon"></i>
            <span class="header__wishlist-counter">20</span>
            <span class="header__wishlist-title">Wish list</span>
          </div>
        </div>
      </div>
    </div>
    <Menu/>
  </header>
</template>
<script>
import Userstatus from './Userstatus.vue'
import Menu from './Menu.vue'
import Search from './Search.vue'
export default {
  components: {
    Userstatus,
    Menu,
    Search
  }
}
</script>
<style scoped lang="less">
@import '../assets/css/style.less';
.header {
  &__wrapper {
    .wrapper();
  }
  &__baseblock {
    background: linear-gradient(#fff,#f7f7f7);
    height: 140px;
    width: 100%;
    padding: 0;
    margin: 0;
    border-bottom: 1px solid  @bordercolor;
  }
  &__searchpanel {
    display: flex;
    justify-content: space-around;
    align-items: center;
    &-logo {
      background-image: url('../assets/images/logo.png');
      background-position: center 30px;
      background-repeat: no-repeat;
      height: 140px;
      width: 136px;
      @media screen and (max-width: 1200px) {
        height: 130px;
        width: 126px;
        background-size: contain;
      }
    }
  }
  &__cart {
    //margin: 20px 1px;
    width: 195px;
    height: 90px;
    padding-right: 1px;
    border-right: 1px solid #ccc;
    position: relative;
    &-icon {
      background-image: url('../assets/images/cart.svg');
      background-size: 100%;
      width: 29px;
      height: 31px;
      display: block;
      position: absolute;
      z-index: 20;
      top: 11px;
      left: -13px;
    }
    &-title {
      font-size: 23px;
      line-height: 56px;
      font-family: @bodyfont;
      color: #6d6d6d;
      display: inline-block;
      margin-left: 27px;
      word-spacing: -1px;
    }
    &-counter {
      font-size: 16px;
      color: #6d6d6d;
      border: none;
      margin-left: -5px;
      display: inline-block;
      background-color: transparent;
    }
    &-total {
      font-size: 27px;
      line-height: 0;
      padding: 2px;
      margin-left: -10px;
      display: inline-block;
      color: @colform;
      font-weight: bold;
      font-family: @bodyfont;
    }
    &-check {
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
    }
  }

  &__wishlist {
    margin: 5px 15px 5px -35px;
    padding: 10px;
    position: relative;
    &-title {
      font-size: 21px;
      line-height: 26px;
      color: @colform;
      font-family: @bodyfont;
    }
    &-icon {
      width: 25px;
      height: 25px;
      margin-left: 20px;
      margin-top: 15px;
      margin-bottom: 5px;
      background-image: url('../assets/images/star.svg');
      background-size: 100%;
      display: block;
    }
    &-counter {
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
}
</style>
