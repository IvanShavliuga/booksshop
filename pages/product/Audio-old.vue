<template>
  <main class="audio">
    <Hello/>
    <Header/>
    <Pathcomp/>
    <div class="audio__wrapper audio__flex">
      <div class="audio__promo">
        <Promo :book="promo"/>
      </div>
      <div class="audio__info">
        <h1 class="audio__title">Ivan Shavliuga (Ivanov)</h1>
        <h2 class="audio__prof">junior vue.js developer</h2>
        <div class="audio__desc">Created this page. Used by:
          <ul class="audio__skills">
            <li class="audio__skills-item">HTML5</li>
            <li class="audio__skills-item">CSS3</li>
            <li class="audio__skills-item">Vue.js</li>
            <li class="audio__skills-item">Vuex</li>
            <li class="audio__skills-item">Vue-router</li>
            <li class="audio__skills-item">Less</li>
            <li class="audio__skills-item">Webpack</li>
          </ul>
        </div>
        <Iconlist/>

      </div>
    </div>
    <div class="audio__wrapper audio__flex">
      <div class="audio__blocklinks">
        <Playlist/>
        <article class="audio__links">
          <h3 class="audio__links-title">Science</h3>
          <ul class="audio__links-list">
            <li class="audio__links-item">
              <a class="audio__links-href"
                href="https://mendel-info.usite.pro">
                Table of Mendeleev
              </a>
            </li>
            <li class="audio__links-item">
              <a class="audio__links-href"
                href="https://t.me/mendelinfo">
                Telegram channel of science
              </a>
            </li>
            <li class="audio__links-item">
              <a class="audio__links-href"
                href="https://www.t.me/vuejscodesru">
                Telegram channel of framework vue.js
              </a>
            </li>
          </ul>
        </article>
      </div>
      <Bookbanner/>
    </div>
    <Footer/>
  </main>
</template>
<script>
// @ is an alias hto /src
import Header from '@/components/Header.vue'
import Hello from '@/components/HelloWorld.vue'
import Iconlist from '@/components/icons/Iconlist.vue'
import Promo from '@/components/Promo.vue'
import Footer from '@/components/Footer.vue'
import Bookbanner from '@/components/Bookbanner.vue'
import Pathcomp from '@/components/Pathcomp.vue'
import Playlist from '@/components/Playlist.vue'


export default {
  name: 'Home',
  components: {
    Header,
    Hello,
    Iconlist,
    Promo,
    Bookbanner,
    Footer,
    Pathcomp,
    Playlist
  },
  data () {
    return {
      promo: {
        img: '/img/telepat.jpg',
        title: 'Телепатия. Проклятие языка',
        author: 'Иван Шавлюга',
        price: 10,
        sale: 45
      },
      arr:[]
    }
  }
}
</script>
<style scoped lang="less">
@import '../../assets/css/style.less';

.audio {
  margin: 0;
  padding: 0;
  width: 100vw;
  &__wrapper {
    .wrapper();
  }
  &__flex {
    display: flex;
    justify-content: center;
    width: 90vw;
  }
  &__empty {
    height: 400px;
  }
  &__blocklinks {
    @media (max-width: 600px) {
      flex-wrap: wrap;
    }
    @media (max-width: 450px) {
      flex-direction: column-reverse;
    }
  }
  &__links {
    width: 50vw;
    padding: 15px;
    margin: 15px;
    &-href {
      color: #2523bd;
      font-size: 22px;
      text-decoration: none;
      @media (max-width: 375px) {
        font-size: @fontsmallsize;
      }
    }
    &-title {
      font-size: 28px;
      color: @colform;
    }
  }
  &__title {
    @media (max-width: 800px) {
      font-size: 27px;
    }
  }
  &__title, &__prof, &__desc {
    color: @colform;
  }
  &__desc {
    font-size: 22px;
  }
  &__skills {
    &-item {
      display: inline;
      padding: 0 15px;
      color: #2523bd;
      font-size: 22px;
      @media (max-width: 800px) {
        padding: 0 10px;
      }
      @media (max-width: 400px) {
        padding: 0 5px;
      }
    }
  }
  &__info {
    width: auto;
    @media (max-width: 1200px) {
      width: 400px;
    }
    @media (max-width: 800px) {
      width: 300px;
    }
    @media (max-width: 660px) {
      width: 400px;
    }
    @media (max-width: 520px) {
      width: 280px;
      margin-left: 50px;
    }
    @media (max-width: 375px) {
      width: 200px;
      margin-left: 50px;
    }
  }
  &__promo {
    margin-left: -100px;
  }
}
</style>
