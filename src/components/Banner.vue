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
    &-background {
      width: 784px;
      height: 304px;
      padding: 0;
      margin: 0;
      position: relative;
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
    }
    &-text {
      position: absolute;
      left: 270px;
      top: 90px;
      z-index: 10;
      color: #fff;
      width: 400px;
    }
    &-title {
      font-size: 52px;
      line-height: 2px;
      color: #ffffff;
      font-weight: bold;
      font-family: @bodyfont;
      text-align: center;
      transform: scaleX(1.05);
    }
    &-subtitle {
      font-size: 27px;
      line-height: 0;
      color: #ffffff;
      font-weight: 200;
      font-family: @bodyfont;
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
      selid: 0,
      selbg: '/img/banner1.png',
      selbook: '/img/book_1.png',
      selauthor: 'Lee Child',
      seltitle: 'A Wanted men',
      selsubtitle: '(Jack Reacher #17)',
      list: [{
        bg: '/img/banner_1.png',
        book: '/img/book_1.png',
        author: 'Lee Child',
        title: 'A Wanted men',
        subtitle: '(Jack Reacher #17)'
      }, {
        bg: '/img/banner_2.png',
        book: '/img/book_2.png',
        author: 'Havinder Singh',
        title: 'Can Love You Happy Twice',
        subtitle: '(The Hare Amber Eyes)'
      }, {
        bg: '/img/banner_3.png',
        book: '/img/book_3.png',
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
      this.selbg = this.list[this.selid].bg
      this.selbook = this.list[this.selid].book
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
    this.selid = 0
    this.selbg = '/img/banner_1.png'
    this.selbook = '/img/book_1.png'
  },
  mounted: function () {
    this.autoplay()
  },
  updated: function () {
    this.autoplay()
  }
}
</script>
