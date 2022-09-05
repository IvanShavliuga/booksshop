<template>
  <main class="product">
    <Hello/>
    <Header/>
    <Pathcomp/>
    <template v-if="book">
    <div class="product__wrapper">
      <section class="product__section product__border product__flex">
        <img class="product__image" :src="book.img" :alt="book.author+'-'+book.title"/>
        <article class="product__block">
          <h3 class="product__block-title">{{book.title}}</h3>
          <p class="product__block-text">{{book.desc}}</p>
          <Pay :book="book"/>
        </article>
      </section>
      <section  class="product__section product__flex">
        <div class="product__section-box">
          <article class="product__pannels">
            <div class="product__pannels-tabs">
              <button class="product__pannels-button product__pannels-buttonactive">Product information</button>
              <button class="product__pannels-button product__pannels-buttonnoactive">Other details</button>
            </div>
            <div class="product__pannels-block">
              <p class="product__pannels-text">
                The Star Wars Episode I: The Phantom Menace novelization was written by Terry Brooks and published on April 21, 1999 by Del Rey. It is based on the script of the movie of the same name. Narration for the abridged audio version was performed by Michael Cumpsty. The unabridged version was performed by Alexander Adams. On January 31, 2012, a new paperback edition was
              </p>
            </div>
          </article>
          <Commentbox/>
        </div>
        <Bookbanner/>
      </section>
    </div>
    </template>
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
import Pay from '@/components/pay.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Hello,
    Footer,
    Pathcomp,
    Bookbanner,
    Commentbox,
    Pay
  },
  data () {
    return {
      book: {
        img: 'https://ivanshavliuga.github.io/simples/photos/booksshop/book_6.jpg',
        title: 'Star Wars Episode I',
        author: 'Terry Brooks',
        price: 150,
        sale: 25,
        desc: 'The Star Wars Episode I: The Phantom Menace novelization was written by Terry Brooks and published on April 21, 1999 by Del Rey. It is based on the script of the movie of the same name. Narration for the abridged audio version was performed by Michael Cumpsty. The unabridged version was performed by Alexander Adams. On January 31, 2012, a new paperback edition '
      }
    }
  },
  /* created () {
    const path = decodeURI(this.$route.fullPath)
    const arr = path.split('id=')
    let id = -1
    if (arr.length === 2) {
      id = +arr[1]
      const booksel = this.$store.getters.books.filter((b) => b.id===id)[0]
      console.log(booksel)
      this.book = {
        ...booksel
      }
      this.book.img = 'https://ivanshavliuga.github.io/simples/photos/booksshop/' + booksel.img
      
    } 
  },*/
   async fetch() {
    try {
      await this.$axios.$post("/api/books/show", { id: +this.$route.query.id }).then((d) => {
        this.book = d[0]
        this.book.img = 'https://ivanshavliuga.github.io/simples/photos/booksshop/' + d[0].img
      }) // [0] ?? null;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
}
</script>
<style scoped lang="less">
@import '../../assets/css/style.less';

.product {
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
