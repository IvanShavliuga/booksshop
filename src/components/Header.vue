<template>
  <header class="header">
    <div class="header__topline">
      <div class="header__wrapper">
        <div class="header__userpanel">
          <ul class="header__userpanel-list">
            <li class="header__userpanel-item">Sign in</li>
            <li class="header__userpanel-item">My account</li>
            <li class="header__userpanel-item">Order status</li>
            <li class="header__userpanel-item">Help</li>
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
              <i class="header__searchpanel-icon"></i>
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>
<script>

</script>
<style lang="less">
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
  }
  &__wrapper {
    width: 80%;
    height: 140px;
    margin: 0 auto;
  }
}
</style>
