<template>
  <main class="home">
    <Hello/>
    <Header/>
    <div class="home__wrapper home__flex">
      <Banner/>
      <Promo v-if="promo" :book="promo" @generate="generate"/>
    </div>
    <div class="home__wrapper home__flex">
      <Catlist @select-category="selCategory"/>
      <div class="home__block">
        <Tabspanel/>
        <Booklist/>
      </div>
    </div>
    <Footer/>
  </main>
</template>

<script>
// @ is an alias hto /src
import Header from '@/components/Header.vue'
import Hello from '@/components/HelloWorld.vue'
import Catlist from '@/components/Catlist.vue'
import Banner from '@/components/Banner.vue'
import Promo from '@/components/Promo.vue'
import Tabspanel from '@/components/Tabspanel.vue'
import Booklist from '@/components/Booklist.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hello,
    Catlist,
    Banner,
    Promo,
    Tabspanel,
    Booklist,
    Footer
  },
  data () {
    return {
      promo: {
        author: 'Rick Smolan, Jennifer Erwitt',
        title: 'The Human Face of Big Data',
        sale: 45,
        price: 27.51,
        img: 'https://ivanshavliuga.github.io/simples/photos/booksshop/book_4.jpg'
      }
    }
  },
  methods: {
    async generate() {
      await this.$axios.$post("/api/books/generate")
    },
    selCategory(cat) {
      this.getBooksQuery(cat)
    },
    getBooksQuery(cat = 'all') {
      this.$axios.$get(`/api/books/index${cat !== 'all' ? '?category=' + cat : ''}`).then((d) => {
        this.$store.dispatch('syncBooks', d)
        this.promo = d.filter((el) => el.id === ~~(Math.random() * d.length - 1))[0] ?? d[0]
      })
    }
  },
  created () {
    this.getBooksQuery()
  }
}
</script>
<style scoped lang="less">
@import '../assets/css/style.less';

.home {
  margin: 0;
  padding: 0;
  &__wrapper {
    .wrapper();
  }
  &__flex {
    display: flex;
    width: 90%;
  }
  &__block {
    width: 100%;
    /*@media screen and (max-width: 845px) {
      width: 90vw;
      margin: 0 auto;
    }*/
  }
}
</style>
