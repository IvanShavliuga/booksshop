<template>
  <header class="header">
    <div class="header__topline">
      <div class="header__wrapper">
        <div class="header__userpanel">
          <ul class="header__userpanel-list">
            <li class="header__userpanel-item">
              <a class="header__userpanel-link" href="#">Sign in</a></li>
            <li class="header__userpanel-item">
              <a class="header__userpanel-link" href="#">My account</a></li>
            <li class="header__userpanel-item">
              <a class="header__userpanel-link" href="#">Order status</a></li>
            <li class="header__userpanel-item">
              <a class="header__userpanel-link" href="#">Help</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header__baseblock">
      <div class="header__wrapper">
        <div class="header__searchpanel">
          <div class="header__searchpanel-logo">
          </div>
          <form class="header__searchpanel-form">
            <input class="header__searchpanel-input" type="text">
            <button class="header__searchpanel-button">
              <i class="header__searchpanel-icon">&nbsp;</i>
              Search
            </button>
          </form>
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
    <nav class="header__menu">
      <div class="header__wrapper">
        <ul class="header__menu-list">
          <li class="header__menu-item itemactive">
            <a class="header__menu-link" href="cm">Computers</a></li>
          <li class="header__menu-item">
            <a class="header__menu-link" href="c">Cooking</a></li>
          <li class="header__menu-item">
            <a class="header__menu-link" href="e">Education</a></li>
          <li class="header__menu-item">
            <a class="header__menu-link" href="f">Fiction</a></li>
          <li class="header__menu-item">
            <a class="header__menu-link" href="h">Health</a></li>
          <li class="header__menu-item">
            <a class="header__menu-link" href="mt">Mathematics</a></li>
          <li class="header__menu-item">
            <a class="header__menu-link" href="md">Medical</a></li>
          <li class="header__menu-item">
            <a class="header__menu-link" href="r">Reference</a></li>
          <li class="header__menu-item">
            <a class="header__menu-link" href="s">Science</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>

</script>
<style lang="less">
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
    border-bottom: 1px solid  #dddddd;
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
    }
    &-form {
      width: 457px;
      height: 40px;
      border-radius: 2px;
      background-color: @bgform;
      border: 3px solid @bgform;
      padding: 0;
      //margin: 40px 5px;
    }
    &-input {
      width: 327px;
      height: 32px;
      margin-top: -1px;
      border: (40px - 32px ) / 2 solid @bgform;
      color: @bgform;
      font-size: 26px;
      text-decoration: none;
      display: inline-block;
    }
    &-button {
      width: 457px - 327px - 17px;
      height: 38px;
      margin-left: 5px;
      padding-left: 30px;
      display: inline-block;
      border: 2px solid @bgform;
      background-color: @bgform;
      font-size: 23px;
      color: #ffffff;
      font-family: @bodyfont;
      position: relative;
    }
    &-icon {
      background-image: url('../assets/images/search.svg');
      background-size: 100%;
      width: 18px;
      height: 18px;
      display: block;
      position: absolute;
      z-index: 10;
      top: 7px;
      left: 7px;
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
  &__topline {
    background-color: rgb(65,65,65);
    width: 100%;
    height: 30px;
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
  &__userpanel {
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: flex-end;
    &-list {
      display: inline;
      margin: 0;
    }
    &-item {
      display: inline;
      margin: 0 10px;
      font-size: 16px;
      line-height: 26px;
      color: #ffffff;
      font-weight: 300;
      font-family: @bodyfont;
      text-align: center;
    }
    &-link {
      color: #ffffff;
      text-decoration: none;
    }
  }
  &__menu {
    border-bottom: 1px solid #bbb;
    height: 50px;
    margin: 0;
    padding: 0;
    &-list {
      display: flex;
      justify-content: center;
      margin: 0;
      height: 50px;
    }
    &-item {
      list-style: none;
      margin: 0;
      padding: 10px 21px;
    }
    &-link {
      font-size: 19px;
      line-height: 26px;
      color: #5b5b5b;
      font-family: @bodyfont;
      margin: 0;
      text-decoration: none;
    }
  }
}
</style>
