<template>
<section class="promo">
  <div class="promo__header">
    <h2 class="promo__header-title">Deal of the Month</h2>
    <h3 class="promo__header-subtitle">{{book.title}}</h3>
  </div>
  <div class="promo__image">
    <img class="promo__image-book" :src="book.img"/>
    <img class="promo__image-panel" src="https://ivanshavliuga.github.io/simples/photos/booksshop/panel.png"/>
  </div>
  <div class="promo__desc">
    <p class="promo__desc-sale">Save {{book.sale}} Today</p>
    <p class="promo__desc-price">${{book.price}}</p>
    <button class="promo__desc-button">Buy now</button>
  </div>
</section>
</template>
<style lang="less">
@import '../assets/css/style.less';
.promo {
  position: relative;
  background-image: url('../assets/images/promo.png');
  width: 230px;
  height: 284px;
  margin: 15px 15px 0 0;
  color: #ffffff;
  padding: 10px;
  @media (max-width: 670px) {
    display: none;
  }
  &__header {
    width: 230px;
    text-align: center;
    color: #ffffff;
    &-title {
      font-size: 27px;
      font-weight: bold;

      margin: 0 auto;
    }
    &-subtitle {
      font-size: 15px;
      margin: 0 auto;
      font-weight: 300;

    }
  }
  &__image {
    position: relative;
    width: 174px;
    height: 135px;
    margin: 0 auto;
    &-book {
      position: absolute;
      z-index: 20;
      top: 7px;
      left: 47px;
      width: @wbook;
      height: @hbook;
    }
    &-panel {
      position: absolute;
      z-index: 10;
      bottom: 0;
      left: 0;
    }
  }
  &__desc {
    width: 230px;
    color: #ffffff;
    text-align: center;
    &-sale {
      font-size: 21px;
      font-weight: 300;
      margin: 5px auto;

    }
    &-price {
      font-size: 29px;
      line-height: 26px;
      font-weight: bold;
      margin: 5px auto;

    }
    &-button {
      font-size: 19px;
      padding: 0 15px;
      color: #ffffff;
      font-weight: bold;

      background-image: linear-gradient(0deg, #51a451 0%, #61c261 100%);
      border: 1px solid #52a452;
      border-radius: 4px;
      filter: drop-shadow(0.5px 0.866px 0px rgba(74,151,74,0.75));
    }
  }
}
</style>
<script>
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  }
}
</script>
