<template>
  <main class="product">
    <Hello/>
    <Header/>
    <Pathcomp/>
    <div class="product__wrapper">
      <section class="product__desc product__flex">
        <img class="product__image" :src="book.img" :alt="book.author+'-'+book.title"/>
        <article class="product__block">
          <h3 class="product__block-title">{{book.title}}</h3>
          <p class="product__block-text">{{book.desc}}</p>
          <div class="product__pay">
            <div class="product__pay-topblock">
              <div class="product__pay-headblock">
                <h4 class="product__pay-header">
                  <span class="product__pay-title">Our price:</span>
                  <span class="product__pay-price">${{book.price}}</span>
                </h4>
                <h5 class="product__pay-sale">Was ${{total}} Save {{book.sale}}% </h5>
              </div>
              <button class="product__pay-button">Add to cart</button>
            </div>
            <hr/>
            <div class="product__pay-bottomblock">
              <p class="product__pay-status">
                <i class="product__pay-icon">&nbsp;</i>
                Safe, Secure Shopping
              </p>
              <p class="product__pay-cards">
                <button class="product__pay-card"></button>
                <button class="product__pay-card"></button>
                <button class="product__pay-card"></button>
                <button class="product__pay-card"></button>
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
    <Footer/>
  </main>
</template>

<script>
// @ is an alias hto /src
import Header from '@/components/Header.vue'
import Hello from '@/components/HelloWorld.vue'
import Footer from '@/components/Footer.vue'
import Pathcomp from '@/components/Path.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hello,
    Footer,
    Pathcomp
  },
  data () {
    return {
      book: {
        img: '/img/book_6.png',
        title: 'Star Wars Episode I',
        author: 'Terry Brooks',
        price: 150,
        sale: 25,
        desc: 'The Star Wars Episode I: The Phantom Menace novelization was written by Terry Brooks and published on April 21, 1999 by Del Rey. It is based on the script of the movie of the same name. Narration for the abridged audio version was performed by Michael Cumpsty. The unabridged version was performed by Alexander Adams. On January 31, 2012, a new paperback edition '
      }
    }
  },
  computed: {
    total () {
      const drb = this.book.sale / 100
      return this.book.price / (1 - drb)
    }
  }
}
</script>
<style scoped lang="less">
@import '../assets/css/style.less';

.product {
  &__wrapper {
    .wrapper();
  }
  &__flex {
    display: flex;
  }
  &__desc {
    border: 1px solid @bordercolor;
    margin: 15px;
  }
  &__block {
    width: 60vw;
    margin-bottom: 10px;
    &-title {
      font-size: 41px;
      line-height: 22px;
      color: #595959;
      font-weight: 300;
      font-family: @bodyfont;
      margin-top: 15px;
      margin-bottom: 30px;
    }
    &-text {
      margin-top: 30px;
      margin-bottom: 20px;
      width: 618px;
      font-size: 16px;
      line-height: 26px;
      color: #7e7e7e;
      font-family: @bodyfont;
    }
  }
  &__pay {
    width: 618px;
    margin-top: 15px;
    padding: 15px;
    border: 1px solid @bordercolor;
    &-topblock {
      display: flex;
    }
    &-headblock {
      width: 30vw;
    }
    &-button {
      background-image: linear-gradient(0deg, #79b260 0%, #92d774 100%);
      border: none;
      padding: 10px 30px;
      display: block;
      margin: 15px auto;
      font-size: 24px;
      height: 50px;
      color: #ffffff;
      font-weight: bold;
      font-family: @pricefont;
    }
    &-header {
      font-size: 36px;
      font-family: @bodyfont;
      margin: 0;
    }
    &-title {
      color: #015699;
      text-align: left;
      margin-left: 0;
    }
    &-price {
      color: @pricecolor;
      font-weight: bold;
      margin-left: 15px;
    }
    &-sale {
      font-size: 17px;
      line-height: 17px;
      color: #939292;
      font-family: @bodyfont;
      text-align: left;
      margin-top: 5px;
      margin-left: 0;
    }
    &-icon {
      background-image: url('../assets/images/lock.svg');
      display: inline-block;
      background-repeat: no-repeat;
      background-position: center bottom;
      width: 15px;
      height: 15px;
    }
    &-status {
      font-size: 13px;
      line-height: 27px;
      color: #939292;
      font-family: "Helvetica Neue CE";
      text-align: left;
      margin: 0;
    }
    &-cards {
      display: flex;
      margin: 0;
    }
    &-card {
      width: 43px;
      height: 25px;
      border: 1px solid @bordercolor;
      margin: 3px;
      &:hover {
        border: 1px solid rgba(181,176,176,0.57);
        filter: sepia(0.5);
        opacity: 0.6;
      }
      &:first-child {
        background-image: url('../assets/images/card1.png');
      }
      &:nth-child(2) {
        background-image: url('../assets/images/card2.png');
      }
      &:nth-child(3) {
        background-image: url('../assets/images/card3.png');
      }
      &:last-child {
        background-image: url('../assets/images/card4.png');
      }
    }
  }
  &__image {
    width: 252px;
    height: 393px;
    margin: 15px;
  }
}
</style>
