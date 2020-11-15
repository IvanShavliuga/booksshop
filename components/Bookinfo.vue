<template>
  <div class="bookinfo">
    <img class="bookinfo__image" :src="fullurlimg" :alt="book.author+'-'+book.title"/>
    <article class="bookinfo__block">
      <h3 class="bookinfo__block-title">{{book.title}}</h3>
      <p class="bookinfo__block-text">{{book.desc}}</p>
      <Pay :book="book"/>
    </article>
  </div>
</template>
<script>
import Pay from '@/components/pay.vue'

export default {
  components: {
    Pay
  },
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      baseurl: ''
    }
  },
  created () {
    this.baseurl = this.$store.getters.baseimgurl
  },
  computed: {
    fullurlimg () {
      return this.baseurl + this.book.img
    }
  }
}
</script>
<style scoped lang="less">
@import '../assets/css/style.less';

.bookinfo {
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

}
</style>
