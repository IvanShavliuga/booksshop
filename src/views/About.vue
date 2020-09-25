<template>
  <div class="about">
    <Hello/>
    <Header/>
    <div class="about__wrapper about__flex">
      <div class="about__promo">
        <Promo :book="promo"/>
      </div>
      <div class="about__info">
        <h1 class="about__title">Ivan Shavliuga (Ivanov)</h1>
        <h2 class="about__prof">junior vue.js developer</h2>
        <p class="about__desc">Created this page. Used by:
          <ul class="about__skills">
            <li class="about__skills-item">HTML5</li>
            <li class="about__skills-item">CSS3</li>
            <li class="about__skills-item">Vue.js</li>
            <li class="about__skills-item">Vuex</li>
            <li class="about__skills-item">Vue-router</li>
            <li class="about__skills-item">Less</li>
            <li class="about__skills-item">Webpack</li>
          </ul>
        </p>
        <Iconlist/>
      </div>
    </div>
    <div class="about__wrapper about__flex">
      <article class="about__links">
        <h3 class="about__links-title">Literature</h3>
        <ul class="about__links-list">
          <li class="about__links-item">
            <a class="about__links-href"
              href="https://author.today/u/ischavliuga/works">
              Author Today
            </a>
          </li>
          <li class="about__links-item">
            <a class="about__links-href"
              href="https://samlib.ru/i/iwan_sergeewich_shawljuga/">
              SamLib.ru
            </a>
          </li>
          <li class="about__links-item">
            <a class="about__links-href"
              href="https://isschavliuga.ucoz.net">
              Personal web-site
            </a>
          </li>
        </ul>
      </article>
      <article class="about__links">
        <h3 class="about__links-title">Science</h3>
        <ul class="about__links-list">
          <li class="about__links-item">
            <a class="about__links-href"
              href="https://mendel-info.usite.pro">
              Table of Mendeleev
            </a>
          </li>
          <li class="about__links-item">
            <a class="about__links-href"
              href="https://t.me/mendelinfo">
              Telegram channel of science
            </a>
          </li>
          <li class="about__links-item">
            <a class="about__links-href"
              href="https://www.t.me/vuejscodesru">
              Telegram channel of framework vue.js
            </a>
          </li>
        </ul>
      </article>
      <Bookbanner/>
    </div>
    <Footer/>
  </div>
</template>
<script>
// @ is an alias hto /src
import Header from '@/components/Header.vue'
import Hello from '@/components/HelloWorld.vue'
import Iconlist from '@/components/icons/Iconlist.vue'
import Promo from '@/components/Promo.vue'
import Footer from '@/components/Footer.vue'
import Bookbanner from '@/components/Bookbanner.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hello,
    Iconlist,
    Promo,
    Bookbanner,
    Footer
  },
  data () {
    return {
      promo: {
        img: '/img/telepat.jpg',
        title: 'Телепатия. Проклятие языка',
        author: 'Иван Шавлюга',
        price: 10,
        sale: 45
      }
    }
  }
}
</script>
<style scoped lang="less">
@import '../assets/css/style.less';

.about {
  &__wrapper {
    .wrapper();
  }
  &__flex {
    display: flex;
    justify-content: center;
  }
  &__empty {
    height: 400px;
  }
  &__links {
    width: 33%;
    padding: 15px;
    margin: 15px;
    &-href {
      color: #2523bd;
      font-size: 22px;
      text-decoration: none;
    }
    &-title {
      font-size: 28px;
      color: @colform;
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
    }
  }
  &__info {
    width: auto;
  }
  &__promo {
    margin-left: 20px;
  }
}
</style>
