<template>
<aside class="bookbanner">
  <h3 class="bookbanner__header">You may also like</h3>
  <div class="bookbanner__block" v-for="(b,k) in books" :key="k">
    <img class="bookbanner__block-image" :src="b.img" :alt="b.title +' - '+b.author"/>
    <div class="bookbanner__block-text">
      <h4 class="bookbanner__block-title">{{b.title}}</h4>
      <p class="bookbanner__block-price">${{b.price}}</p>
      <button class="bookbanner__block-button">Read more</button>
    </div>
  </div>
</aside>
</template>
<style scoped lang="less">
@import '../assets/css/style.less';

.bookbanner {
  width: 16vw;
  border: 1px solid @bordercolor;
  padding: 0;
  margin: 15px;
  &__header {
    font-size: 18px;
    margin: 0 0 10px 0;
    color: #7e7e7e;
    font-family: @bodyfont;
  }
  &__block {
    display: flex;
    padding: 15px;
    border-bottom: 1px solid @bordercolor;
    &-image {
      width: 50px;
      height: 78px;
      border: 4px solid white;
      box-shadow: 1px 1px 3px 5px #aaa;
    }
    &-text {
      margin: 0 0 0 15px;
    }
    &-text > * {
      margin: 0 0 10px 0;
    }
    &-title {
      margin-bottom: 0;
      font-size: 15px;
      line-height: 16px;
      color: #595959;
      font-weight: 300;
      font-family: @bodyfont;
    }
    &-price {
      margin-top: 0;
      font-size: 22px;
      color: @pricecolor;
      font-family: @pricefont;
    }
    &-button {
      background-image: linear-gradient(0deg, #242424 0%, #424242 100%);
      border: 1px solid #232323;
      font-size: 15px;
      line-height: 0;
      display: inline-block;
      transform: scaleY(1.2);
      margin-left: 0;
      padding: 9px 10px;
      color: #ffffff;
      font-family: @bodyfont;
    }
  }
}
</style>
<script>
export default {
  data () {
    return {
      books: [{
        id: 0,
        img: '/img/book_5.png',
        title: 'The Hare With Amber',
        author: 'Edmund De Waal',
        price: 50,
        sale: 30
      }, {
        id: 1,
        img: '/img/book_5.png',
        title: 'The Hare With Amber',
        author: 'Edmund De Waal',
        price: 50,
        sale: 30
      }, {
        id: 2,
        img: '/img/book_5.png',
        title: 'The Hare With Amber',
        author: 'Edmund De Waal',
        price: 50,
        sale: 30
      }, {
        id: 3,
        img: '/img/book_5.png',
        title: 'The Hare With Amber',
        author: 'Edmund De Waal',
        price: 50,
        sale: 30
      }, {
        id: 4,
        img: '/img/book_5.png',
        title: 'The Hare With Amber',
        author: 'Edmund De Waal',
        price: 50,
        sale: 30
      }, {
        id: 5,
        img: '/img/book_5.png',
        title: 'The Hare With Amber',
        author: 'Edmund De Waal',
        price: 50,
        sale: 30
      }, {
        id: 6,
        img: '/img/book_5.png',
        title: 'The Hare With Amber',
        author: 'Edmund De Waal',
        price: 50,
        sale: 30
      }]
    }
  }
}
</script>
