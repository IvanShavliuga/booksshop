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
  width: 30vw;
  border: 1px solid @bordercolor;
  padding: 0;
  margin: 15px;
  margin-right: 0;
  margin-top: 55px;
  @media (max-width: 500px) {
    display: none;
  }
  @media (max-width: 900px) {
    width: 25vw;
  }
  &__header {
    font-size: 18px;
    margin: 10px;
    color: #7e7e7e;

  }
  &__block {
    display: flex;
    padding: 20px 15px;
    border-bottom: 1px solid @bordercolor;
    @media (max-width: 900px) {
      padding: 10px 5px;
      flex-wrap: wrap;
    }
    &-image {
      width: 50px;
      height: 78px;
      border: 4px solid white;
      box-shadow: 1px 1px 3px 5px #aaa;
      @media (max-width: 900px) {
        width: 40px;
        height: 68px;
        margin: 15px auto;
      }
    }
    &-text {
      margin: 0 0 0 15px;
    }
    &-text > * {
      margin: 0 0 10px 0;
      @media (max-width: 750px) {
        text-align: center;
      }
    }
    &-title {
      margin-bottom: 0;
      font-size: 15px;
      line-height: 16px;
      color: #595959;
      font-weight: 300;
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
      @media (max-width: 900px) {
        font-size: 10px;
      }
      @media (max-width: 750px) {
        text-align: center;
        margin: 5px auto;
        margin-left: 10px;
      }
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
        img: 'https://ivanshavliuga.github.io/test/booksshop/img/book_4.jpg',
        title: 'The Hare With Amber',
        author: 'Edmund De Waal',
        price: 50,
        sale: 30
      }, {
        id: 1,
        img: 'https://ivanshavliuga.github.io/test/booksshop/img/book_4.jpg',
        title: 'The Hare With Amber',
        author: 'Edmund De Waal',
        price: 50,
        sale: 30
      }, {
        id: 2,
        img: 'https://ivanshavliuga.github.io/test/booksshop/img/book_4.jpg',
        title: 'The Hare With Amber',
        author: 'Edmund De Waal',
        price: 50,
        sale: 30
      }, {
        id: 3,
        img: 'https://ivanshavliuga.github.io/test/booksshop/img/book_4.jpg',
        title: 'The Hare With Amber',
        author: 'Edmund De Waal',
        price: 50,
        sale: 30
      }, {
        id: 4,
        img: 'https://ivanshavliuga.github.io/test/booksshop/img/book_4.jpg',
        title: 'The Hare With Amber',
        author: 'Edmund De Waal',
        price: 50,
        sale: 30
      }, {
        id: 5,
        img: 'https://ivanshavliuga.github.io/test/booksshop/img/book_4.jpg',
        title: 'The Hare With Amber',
        author: 'Edmund De Waal',
        price: 50,
        sale: 30
      }, {
        id: 6,
        img: 'https://ivanshavliuga.github.io/test/booksshop/img/book_4.jpg',
        title: 'The Hare With Amber',
        author: 'Edmund De Waal',
        price: 50,
        sale: 30
      }]
    }
  }
}
</script>
