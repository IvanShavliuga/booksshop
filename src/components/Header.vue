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
            <i class="header__cart-icon"></i>
            <span class="header__cart-title">
              Your cart
              <button class="header__cart-counter">
                (2 items)
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>

</script>
<style lang="less">
@import '../assets/css/style.less';
.header {
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
      margin: 40px 5px;
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
      .focus();
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
      font-family: "Segoe";
      position: relative;
      .focus();
    }
    &-icon {
      background-image: url('../assets/images/search.svg');
      background-size: 100%;
      width: 18px;
      height: 18px;
      stroke: white;
      display: block;
      position: absolute;
      z-index: 10;
      top: 7px;
      left: 7px;
    }
  }
  &__cart {
    margin: 40px 5px;
    height: 40px;
    border-right: 1px solid #ccc;
    &-title {
      font-size: 23px;
      font-family: "Segoe";
      color: #6d6d6d;
    }
    &-counter {
      font-size: 16px;
      color: #6d6d6d;
      border: none;
      background-color: transparent;
      .focus();
    }
  }
  &__topline {
    background-color: rgb(65,65,65);
    width: 100%;
    height: 30px;
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
      font-family: 'Segoe';
      text-align: center;
    }
    &-link {
      color: #ffffff;
      text-decoration: none;
      .focus();
    }
  }
  &__wrapper {
    width: 80%;
    height: 140px;
    margin: 0 auto;
  }
}
</style>
