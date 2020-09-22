<template>
<article class="book">
  <img class="book__image" :src="img"/>
  <h3 class="book__title">{{title}}</h3>
  <p class="book__price">${{price}}</p>
  <p class="book__sale">{{sale}}%</p>
</article>
</template>
<script>
export default {
  data () {
    return {
      img: '/img/telepat.jpg',
      title: 'Телепатия. Проклятие языка',
      author: 'Иван Шавлюга',
      price: 10,
      sale: 45
    }
  }
}
</script>
<style scoped lang="less">
@import '../assets/css/style.less';

.book {
  position: relative;
  width: @wbook + 10px;
  margin: 10px;
  padding: 10px;
  &__image {
    width: @wbook;
    height: @hbook;
    border: 4px solid white;
    box-shadow: 1px 1px 3px 5px #aaa;
  }
  &__title {
    font-size: 15px;
    color: @colform;
    font-weight: 300;
    font-family: @bodyfont;
    text-align: center;
    margin-bottom: 0;
  }
  &__price {
    margin-top: 0;
    font-size: 22px;
    color: @pricecolor;
    font-family: @pricefont;
    text-align: center;
  }
  &__sale {
    position: absolute;
    right: -5px;
    top: -20px;
    background-color: @pricecolor;
    color: #fff;
    width: 50px;
    height: 50px;
    font-size: 19px;
    line-height: 46px;
    color: #ffffff;
    font-weight: bold;
    font-family: @bodyfont;
    text-align: center;
    border-radius: 50%;
  }
}
</style>
