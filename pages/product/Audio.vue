<template>
  <main class="audio">
    <Hello/>
    <Header/>
    <Pathcomp/>
    <div class="audio__wrapper">
      <section class="audio__section audio__border audio__flex">
        <Bookinfo :book="book"/>
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
                {{book.desc}}
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
import Bookinfo from '@/components/Bookinfo.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Hello,
    Footer,
    Pathcomp,
    Bookbanner,
    Commentbox,
    Playlist,
    Bookinfo
  },
  data () {
    return {
      book: {
        img: 'telepat.jpg',
        title: 'Телепатия. Проклятие языка',
        author: 'Иван Шавлюга',
        price: 10,
        sale: 45,
        desc: 'Программиста Ксению Железнову гипнотизирует при помощи шлемов-стимуляторов секта с целью посеять панику и ужас в городе. Сектанты ставят задачу сделать как можно больше людей роботами для жестоких опытов. Но к счастью у Ксении Железновой есть своя методика – язык программирования и медицинские знания, которые помогают секту обезвредить и предотвратить массовые расстрелы в городе Плазмоградске.'
      }
    }
  }
}
</script>
<style scoped lang="less">
@import '../../assets/css/style.less';

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
