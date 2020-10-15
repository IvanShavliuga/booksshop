<template>
  <header class="header">
    <Userstatus/>
    <div class="header__baseblock">
      <div class="header__wrapper">
        <div class="header__searchpanel">
          <div class="header__searchpanel-logo">
          </div>
          <Search/>
          <Cart/>
          <Wishlist/>
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
import Cart from './Cart.vue'
import Wishlist from './Wishlist.vue'

export default {
  components: {
    Userstatus,
    Menu,
    Search,
    Cart,
    Wishlist
  }
}
</script>
<style scoped lang="less">
@import '../assets/css/style.less';
.header {
  &__wrapper {
    .wrapper();
  }
  @media screen and (max-width: 915px) {
    height: auto;
  }
  &__baseblock {
    background: linear-gradient(#fff,#f7f7f7);
    height: 140px;
    @media screen and (max-width: 1060px) {
      height: auto;
    }
    width: 100%;
    padding: 0;
    margin: 0;
    border-bottom: 1px solid  @bordercolor;
  }
  &__searchpanel {
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 1060px) {
      flex-wrap: wrap;
    }
    @media screen and (max-width: 915px) {
      height: auto;
    }
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
      @media screen and (max-width: 1035px) {
        height: 100px;
        width: 96px;
      }
    }
  }
}
</style>
