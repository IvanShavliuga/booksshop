<template>
  <main class="product">
    <Hello/>
    <Header/>
    <Pathcomp/>
    <div class="product__wrapper">
      <section class="product__desc product__flex">
        <img class="product__image" :src="book.img" :alt="book.author+'-'+book.title"/>
        <p>{{book.desc}}</p>
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
        sale: 20,
        desc: 'The Star Wars Episode I: The Phantom Menace novelization was written by Terry Brooks and published on April 21, 1999 by Del Rey. It is based on the script of the movie of the same name. Narration for the abridged audio version was performed by Michael Cumpsty. The unabridged version was performed by Alexander Adams. On January 31, 2012, a new paperback edition '
      }
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
    width: 70vw;
  }
  &__image {
    width: 252px;
    height: 393px;
    margin: 15px;
  }
}
</style>
