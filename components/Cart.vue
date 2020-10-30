<template>
  <div class="cart">
    <i class="cart__icon">&nbsp;</i>
    <span class="cart__title">
      <span class="cart__title-text">Your cart</span>
      <button class="cart__counter">
        ({{user.purchase.length}} items)
      </button>
    </span>
    <span class="cart__total">
      ${{user.total}}
    </span>
    <button class="cart__check">
      Checkout
    </button>
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
.cart {
  //margin: 20px 1px;
  width: 195px;
  height: 90px;
  padding-right: 1px;
  border-right: 1px solid #ccc;
  position: relative;
  @media (min-width: 601px) and (max-width: 1130px) {
    border-right: none;
  }
  @media (min-width: 601px) and (max-width: 740px) {
    width: 140px;
  }
  @media (min-width: 601px) and (max-width: 655px) {
    width: 110px;
  }
  @media (max-width: 350px) {
    width: 145px;
    border: none;
    margin-left: 15px;
  }
  @media (max-width: 210px) {
    width: 150px;
    margin-left: -15px;
  }
  &__icon {
    background-image: url('../assets/images/cart.svg');
    background-size: 100%;
    width: 29px;
    height: 31px;
    z-index: 20;
    .posabsolute(11px, -13px);
    @media (min-width: 601px) and (max-width: 740px) {
      left: -3px;
    }
    @media (min-width: 601px) and (max-width: 655px) {
      display: none;
    }
    @media (max-width: 350px) {
      display:none;
    }
  }
  &__title {
    font-size: 23px;
    line-height: 56px;
    color: #6d6d6d;
    display: inline-block;
    margin-left: 27px;
    word-spacing: -1px;
    @media (min-width: 601px)  and (max-width: 740px) {
      display: none;
    }
    @media (max-width: 350px) {
      display:none;
    }
    &-text {
      @media (max-width: 1320px) {
        font-size: 18px;
      }
    }
  }
  &__counter {
    font-size: 16px;
    color: #6d6d6d;
    border: none;
    margin-left: -5px;
    display: inline-block;
    background-color: transparent;
  }
  &__total {
    font-size: 27px;
    line-height: 0;
    padding: 2px;
    margin-left: -10px;
    display: inline-block;
    color: @colform;
    font-weight: bold;
    @media (min-width: 601px)  and (max-width: 740px) {
      .posabsolute(25px, 35px);
    }
    @media (max-width: 655px) {
      left: 5px;
    }
    @media (max-width: 350px) {
      .posabsolute(25px, 45px);
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
    @media (min-width: 601px)  and (max-width: 740px) {
      .posabsolute(45px, 15px);
    }
    @media (min-width: 601px)  and (max-width: 655px) {
      left: -20px;
    }
    @media (max-width: 350px) {
      .posabsolute(45px, 15px);
    }
  }
}
</style>
