<template>
  <main class="audio">
    <Hello/>
    <Header/>
    <Pathcomp/>
    <div class="audio__wrapper">
      <section class="audio__section audio__border audio__flex">
        <img class="audio__image" :src="book.img" :alt="book.author+'-'+book.title"/>
        <article class="audio__block">
          <h3 class="audio__block-title">{{book.title}}</h3>
          <p class="audio__block-text">{{book.desc}}</p>
          <div class="audio__pay">
            <div class="audio__pay-topblock">
              <div class="audio__pay-headblock">
                <h4 class="audio__pay-header">
                  <span class="audio__pay-title">Our price:</span>
                  <span class="audio__pay-price">${{book.price}}</span>
                </h4>
                <h5 class="audio__pay-sale">Was ${{total}} Save {{book.sale}}% </h5>
              </div>
              <button class="audio__pay-button">Add to cart</button>
            </div>
            <hr/>
            <div class="audio__pay-bottomblock">
              <p class="audio__pay-status">
                <i class="audio__pay-icon">&nbsp;</i>
                Safe, Secure Shopping
              </p>
              <p class="audio__pay-cards">
                <button class="audio__pay-card"></button>
                <button class="audio__pay-card"></button>
                <button class="audio__pay-card"></button>
                <button class="audio__pay-card"></button>
              </p>
            </div>
          </div>
        </article>
      </section>
      <section  class="audio__section audio__flex">
        <div class="audio__section-box">
          <Playlist/>
        </div>
      </section>
      <section  class="audio__section audio__flex">
        <div class="audio__section-box">
          <article class="audio__pannels">
            <div class="audio__pannels-tabs">
              <button class="audio__pannels-button audio__pannels-buttonactive">audio information</button>
              <button class="audio__pannels-button audio__pannels-buttonnoactive">Other details</button>
            </div>
            <div class="audio__pannels-block">
              <p class="audio__pannels-text">
                The Star Wars Episode I: The Phantom Menace novelization was written by Terry Brooks and published on April 21, 1999 by Del Rey. It is based on the script of the movie of the same name. Narration for the abridged audio version was performed by Michael Cumpsty. The unabridged version was performed by Alexander Adams. On January 31, 2012, a new paperback edition was
              </p>
            </div>
          </article>
          <Commentbox/>
        </div>
        <Bookbanner/>
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
import Pathcomp from '@/components/Pathcomp.vue'
import Bookbanner from '@/components/Bookbanner.vue'
import Commentbox from '@/components/Commentbox.vue'
import Playlist from '@/components/Playlist.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hello,
    Footer,
    Pathcomp,
    Bookbanner,
    Commentbox,
    Playlist
  },
  data () {
    return {
      book: {
        img: '/img/book_6.jpg',
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

.audio {
  margin: 0;
  padding: 0;
  &__wrapper {
    .wrapper();
  }
  &__flex {
    display: flex;
    &:first-child {
      @media (max-width: 660px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
  &__border {
    border: 1px solid @bordercolor;
  }
  &__block {
    width: 53vw;
    margin: 10px auto 0 auto;
    @media (max-width: 650px) {
      width: 65vw;
    }
    &-title {
      font-size: 41px;
      line-height: 22px;
      color: #595959;
      font-weight: 300;

      margin-top: 15px;
      margin-bottom: 30px;
      @media (max-width: 630px) {
        font-size: 32px;
      }
      /*@media (max-width: 560px) {
        font-size: 27px;
      }*/
      @media (max-width: 450px) {
        font-size: 27px;
        line-height: 40px;
        word-spacing: -1px;
      }
      @media (max-width: 350px) {
        font-size: 27px;
        line-height: 40px;
        word-spacing: 7px;
      }
    }
    &-text {
      margin-top: 30px;
      margin-bottom: 20px;
      width: 670px;
      font-size: @fontsmallsize;
      line-height: 26px;
      color: #7e7e7e;

      @media (max-width: 1300px) {
        width: 49vw;
      }
      @media (max-width: 650px) {
        width: 65vw;
        height: auto;
      }/*
      @media (max-width: 530px) {
        width: 58vw;
        height: auto;
      }
      @media (max-width: 450px) {
        width: 52vw;
        height: auto;
      }*/
    }
  }
  &__pay {
    width: 670px;
    margin-top: 30px;
    margin-bottom: 15px;
    padding: 15px;
    border: 1px solid @bordercolor;
    @media (max-width: 1300px) {
      width: 49vw;
    }
    @media (max-width: 1200px) {
      width: 46vw;
    }
    /*@media (max-width: 800px) {
      width: 43vw;
    }*/
    @media (max-width: 650px) {
      width: 65vw;
      /*margin-left: -120px;
      margin-top: 20px;*/
    }
    @media (max-width: 370px) {
      margin-left: -10px;
    }
    @media (max-width: 280px) {
      border: none;
      margin-left: -15px;
    }
    &-topblock {
      display: flex;
      @media (max-width: 495px) {
        flex-direction: column;
        justify-content: center;
      }
    }
    &-headblock {
      width: 30vw;
      margin-top: 5px;
      @media (max-width: 745px) {
        margin: 0 auto;
      }
      @media (max-width: 495px) {
        width: 58vw;
      }
      /*@media (max-width: 350px) {
        width: 190px;
      }*/
      @media (max-width: 290px) {
        width: 150px;
        margin: 0;
      }
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
      @media (max-width: 1200px) {
        font-size: 20px;
        padding: 10px 5px;
        width: 150px;
      }
      @media (max-width: 500px) {
        font-size: 17px;
        padding: 2px 5px;
        height: 30px;
        margin: 10px auto;
        width: 120px;
      }
    }
    &-header {
      font-size: 36px;

      margin: 0;
      @media (max-width: 880px) {
        font-size: 26px;
      }
      @media (max-width: 745px) {
        font-size: 20px;
      }
      @media (max-width: 495px) {
        font-size: 30px;
      }
      /*@media (max-width: 400px) {
        font-size: 26px;
      }*/
      @media (max-width: 370px) {
        font-size: 20px;
      }
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

      text-align: left;
      margin-top: 5px;
      margin-left: 0;
      @media (max-width: 745px) {
        text-align: center;
      }
      @media (max-width: 500px) {
        margin-top: 0;
        margin-bottom: 0;
      }
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
      @media (max-width: 270px) {
        width: 100px;
        flex-wrap: wrap;
        margin: 0 auto;
      }
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
    /*@media (max-width: 700px) {
      width: 202px;
      height: 343px;
    }
    @media (max-width: 650px) {
      width: 132px;
      height: 273px;
    }
    @media (max-width: 450px) {
      width: 102px;
      height: 253px;
    }*/
    @media (max-width: 360px) {
      width: 202px;
      height: 343px;
    }
    @media (max-width: 240px) {
      width: 102px;
      height: 243px;
    }
  }
  &__pannels {
    width: 55vw;
    margin: 0;
    margin-top: 15px;
    padding: 0;
    @media (max-width: 1300px) {
      width: 54vw;
    }
    &-block {
      width: 55vw;
      border: 1px solid @bordercolor;
      padding: 18px 5px;
      margin-right: 0;
      margin-top: 40px;
      @media (max-width: 1300px) {
        width: 56vw;
      }
      @media (max-width: 1200px) {
        width: 63vw;
      }
      @media (max-width: 500px) {
        width: 90vw;
      }
      @media (max-width: 270px) {
        margin-top: 60px;
      }
    }
    &-text {
      width: 47vw;
      font-size: 14px;
      line-height: 26px;
      color: #7e7e7e;
      margin: 15px;

      @media (max-width: 1200px) {
        width: 61vw;
      }
      @media (max-width: 500px) {
        width: 87vw;
      }
    }
    &-tabs {
      position: relative;
      height: 1px;
    }
    &-button {
      position: absolute;
      font-size: 18px;
      line-height: 26px;
      color: #7e7e7e;
      padding: 6px 15px;
      margin-right: 10px;

      border: 1px solid @bordercolor;
      border-bottom: none;
      @media (max-width: 530px) {
        font-size: 14px;
        padding: 6px 10px;
      }
      @media (max-width: 270px) {
        padding: 6px 2px;
        width: 110px;
        height: 60px;
      }
      &:first-child {
        left: 0px;
        top: 3px;
      }
      &:last-child {
        left: 210px;
        top: 3px;
        @media (max-width: 530px) {
          left: 120px;
        }
        @media (max-width: 250px) {
          left: 130px;
        }
        @media (max-width: 250px) {
          left: 115px;
        }
      }
      &active {
        background-color: #fff;
      }
      &noactive {
        background-color: @bordercolor;
        color: #ffffff;
      }
    }
  }
  &__section {
    @media (max-width: 1200px) {
      width: 90vw;
      margin: 0 auto;
    }
    &-box {
      @media (max-width: 1200px) {
        width: 90vw;
      }
    }
  }
}
/*hr {
  @media (max-width: 630px) {
    display: none;
  }
}*/
</style>
