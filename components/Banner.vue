<template>
<section class="banner">
  <div class="banner__item">
    <img class="banner__item-background" :src="selbg"/>
    <img class="banner__item-bookmax" :src="selbook"/>
    <div class="banner__item-bookmini">
      <img class="banner__item-photomini" :src="selbook"/>
      <img class="banner__item-disk" src="/img/disk.png"/>
    </div>
    <div class="banner__item-text" :style="(seltitle.length > 13)?'top: 120px':''">
      <h1 class="banner__item-title" :style="(seltitle.length > 13)?'font-size: 33px':''">{{seltitle}}</h1>
      <p class="banner__item-subtitle">{{selsubtitle}}</p>
      <p class="banner__item-author">By {{selauthor}}</p>
    </div>
    <button class="banner__item-arrow left" @click="prev">&nbsp;</button>
    <button class="banner__item-arrow right" @click="next">&nbsp;</button>
  </div>
</section>
</template>
<style scoped lang="less">
@import '../assets/css/style.less';
.banner {
  margin: 15px;
  &__item {
    width: 784px;
    height: 304px;
    padding: 0;
    margin: 0;
    position: relative;
    @media (max-width: 1080px) {
      width: 680px;
    }
    @media (max-width: 1060px) {
      width: 650px;
    }
    @media (max-width: 950px) {
      width: 500px;
    }
    @media (max-width: 790px) {
      width: 400px;
    }
    @media (max-width: 670px) {
      width: 100%;
    }
    &-background {
      width: 784px;
      height: 304px;
      padding: 0;
      margin: 0;
      position: relative;
      @media (max-width: 1080px) {
        width: 680px;
      }
      @media (max-width: 1060px) {
        width: 650px;
      }
      @media (max-width: 950px) {
        width: 500px;
      }
      @media (max-width: 790px) {
        width: 400px;
      }
      @media (max-width: 670px) {
        width: 100%;
      }
    }
    &-bookmini {
      position: absolute;
      z-index: 20;
      width: 143px;
      height: 108px;
      z-index: 20;
      left: 180px;
      top: 140px;
      display:flex;
      @media (max-width: 420px) {
        display: none;
      }
    }
    &-disk {
      width: 50px;
      height: 108px;
    }
    &-photomini {
      width: 93px;
      height: 108px;
      background-size: cover;
      background-color: rgba(240,83,86,0.7);
    }
    &-bookmax {
      width: 149px;
      height: 228px;
      position: absolute;
      left: 80px;
      top: 30px;
      z-index: 10;
      @media (max-width: 320px) {
        width: 89px;
        height: 168px;
        top: 60px;
        left: 70px;
      }
      @media (max-width: 250px) {
        width: 69px;
        height: 148px;
        top: 60px;
        left: 60px;
      }
    }
    &-text {
      position: absolute;
      left: 270px;
      top: 90px;
      z-index: 10;
      color: #fff;
      width: 400px;
      @media (max-width: 950px) {
        display: none;
      }
    }
    &-title {
      font-size: 52px;
      line-height: 2px;
      color: #ffffff;
      font-weight: bold;

      text-align: center;
      transform: scaleX(1.05);
      @media (max-width: 1060px) {
        transform: scaleX(0.75);
      }
    }
    &-subtitle {
      font-size: 27px;
      line-height: 0;
      color: #ffffff;
      font-weight: 200;

      text-align: center;
    }
    &-author {
      text-align: center;
      font-size: 21px;
      font-weight: bold;
    }
    &-arrow {
      background-image: url('../assets/images/arrow.svg');
      position: absolute;
      z-index: 30;
      width: 38px;
      height: 38px;
      border: none;
      background-color: transparent;
    }
  }
}
.left {
  left: 20px;
  top: 120px;
  transform: rotateZ(-180deg);
}
.right {
  right: 20px;
  top: 120px;
}
</style>
<script>
export default {
  data () {
    return {
      baseurl: '',
      selid: 0,
      selbg: 'https://ivanshavliuga.github.io/test/booksshop/img/banner1.jpg',
      selbook: 'https://ivanshavliuga.github.io/test/booksshop/img/book_1.jpg',
      selauthor: 'Lee Child',
      seltitle: 'A Wanted men',
      selsubtitle: '(Jack Reacher #17)',
      list: [{
        bg: 'https://ivanshavliuga.github.io/test/booksshop/img/banner_1.jpg',
        book: 'https://ivanshavliuga.github.io/test/booksshop/img/book_1.jpg',
        author: 'Lee Child',
        title: 'A Wanted men',
        subtitle: '(Jack Reacher #17)'
      }, {
        bg: 'https://ivanshavliuga.github.io/test/booksshop/img/banner_2.jpg',
        book: 'https://ivanshavliuga.github.io/test/booksshop/img/book_2.jpg',
        author: 'Havinder Singh',
        title: 'Can Love You Happy Twice',
        subtitle: '(The Hare Amber Eyes)'
      }, {
        bg: 'https://ivanshavliuga.github.io/test/booksshop/img/banner_3.jpg',
        book: 'https://ivanshavliuga.github.io/test/booksshop/img/book_3.jpg',
        author: 'Girichi Kundli',
        title: 'Marathon Baba',
        subtitle: '(The Hare Amber Eyes)'
      }]
    }
  },
  methods: {
    next () {
      if (this.selid < 2) {
        this.selid++
      } else {
        this.selid = 0
      }
      this.selbg = this.baseurl + this.list[this.selid].bg
      this.selbook = this.baseurl + this.list[this.selid].book
      this.selauthor = this.list[this.selid].author
      this.seltitle = this.list[this.selid].title
      this.selsubtitle = this.list[this.selid].subtitle
    },
    prev () {
      if (this.selid > 0) {
        this.selid--
      } else {
        this.selid = 2
      }
      this.selbg = this.list[this.selid].bg
      this.selbook = this.list[this.selid].book
      this.selauthor = this.list[this.selid].author
      this.seltitle = this.list[this.selid].title
      this.selsubtitle = this.list[this.selid].subtitle
    },
    autoplay () {
      setTimeout(() => { this.next() }, 4000)
    }
  },
  created: function () {
    this.list = this.$store.getters.slider;
    this.baseurl = this.$store.getters.baseimgurl;
    this.selid = 0
    this.selbg = this.baseurl + 'banner_1.jpg'
    this.selbook = this.baseurl + 'book_1.jpg'
  },
  mounted: function () {
    this.autoplay()
  },
  updated: function () {
    this.autoplay()
  }
}
</script>
