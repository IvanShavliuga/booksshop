<template>
  <main class="home">
    <Hello/>
    <Header/>
    <div class="home__wrapper home__flex">
      <Banner/>
      <Promo :book="promo"/>
    </div>
    <div class="home__wrapper home__flex">
      <Catlist/>
      <div class="home__block">
        <Tabspanel/>
        <Booklist/>
      </div>
    </div>
    <Footer/>
  </mains>
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
        img: '/img/book_4.png'
      }
    }
  }
}
</script>
<style scoped lang="less">
@import '../assets/css/style.less';

.home {
  &__wrapper {
    .wrapper();
  }
  &__flex {
    display: flex;
  }
  &__block {
    width: 70vw;
  }
}
</style>
