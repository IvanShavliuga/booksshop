<template>
  <div class="pay">
    <div class="pay__topblock">
      <div class="pay__headblock">
        <h4 class="pay__header">
          <span class="pay__header-title">Our price:</span>
          <span class="pay__header-price">${{book.price}}</span>
        </h4>
        <h5 class="pay__headblock-sale">Was ${{total}} Save {{book.sale}}% </h5>
      </div>
      <button class="pay__topblock-button">Add to cart</button>
    </div>
    <hr/>
    <div class="pay__bottomblock">
      <p class="pay__bottomblock-status">
        <i class="pay__bottomblock-icon">&nbsp;</i>
        Safe, Secure Shopping
      </p>
      <p class="pay__bottomblock-cards">
        <button class="pay__card"></button>
        <button class="pay__card"></button>
        <button class="pay__card"></button>
        <button class="pay__card"></button>
      </p>
    </div>
  </div>
</template>
<style scoped lang="less">
@import '../assets/css/style.less';
.pay {
  width: 670px;
  margin-top: 30px;
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid @bordercolor;
  @media (max-width: 1300px) {
    width: 49vw;
  }
  @media (max-width: 1200px) {
    width: 46vw;
  }
  /*@media (max-width: 800px) {
    width: 43vw;
  }*/
  @media (max-width: 650px) {
    width: 65vw;
    /*margin-left: -120px;
    margin-top: 20px;*/
  }
  @media (max-width: 370px) {
    margin-left: -10px;
  }
  @media (max-width: 280px) {
    border: none;
    margin-left: -15px;
  }
  &__topblock {
    display: flex;
    @media (max-width: 495px) {
      flex-direction: column;
      justify-content: center;
    }
    &-button {
      background-image: linear-gradient(0deg, #79b260 0%, #92d774 100%);
      border: none;
      padding: 10px 30px;
      display: block;
      margin: 15px auto;
      font-size: 24px;
      height: 50px;
      color: #ffffff;
      font-weight: bold;
      font-family: @pricefont;
      @media (max-width: 1200px) {
        font-size: 20px;
        padding: 10px 5px;
        width: 150px;
      }
      @media (max-width: 500px) {
        font-size: 17px;
        padding: 2px 5px;
        height: 30px;
        margin: 10px auto;
        width: 120px;
      }
    }
  }
  &__headblock {
    width: 30vw;
    margin-top: 5px;
    @media (max-width: 745px) {
      margin: 0 auto;
    }
    @media (max-width: 495px) {
      width: 58vw;
    }
    /*@media (max-width: 350px) {
      width: 190px;
    }*/
    @media (max-width: 290px) {
      width: 150px;
      margin: 0;
    }
    &-sale {
      font-size: 17px;
      line-height: 17px;
      color: #939292;

      text-align: left;
      margin-top: 5px;
      margin-left: 0;
      @media (max-width: 745px) {
        text-align: center;
      }
      @media (max-width: 500px) {
        margin-top: 0;
        margin-bottom: 0;
      }
    }
  }

  &__header {
    font-size: 36px;

    margin: 0;
    @media (max-width: 880px) {
      font-size: 26px;
    }
    @media (max-width: 745px) {
      font-size: 20px;
    }
    @media (max-width: 495px) {
      font-size: 30px;
    }
    /*@media (max-width: 400px) {
      font-size: 26px;
    }*/
    @media (max-width: 370px) {
      font-size: 20px;
    }
    &-title {
      color: #015699;
      text-align: left;
      margin-left: 0;
    }
    &-price {
      color: @pricecolor;
      font-weight: bold;
      margin-left: 15px;
    }

  }
  }
  &__icon {
    background-image: url('../assets/images/lock.svg');
    display: inline-block;
    background-repeat: no-repeat;
    background-position: center bottom;
    width: 15px;
    height: 15px;
  }
  &__bottomblock {
    &-status {
      font-size: 13px;
      line-height: 27px;
      color: #939292;
      font-family: "Helvetica Neue CE";
      text-align: left;
      margin: 0;
    }
    &-cards {
      display: flex;
      margin: 0;
      @media (max-width: 270px) {
        width: 100px;
        flex-wrap: wrap;
        margin: 0 auto;
      }
    }
}

.pay__card {
  width: 43px;
  height: 25px;
  border: 1px solid @bordercolor;
  margin: 3px;
  &:hover {
    border: 1px solid rgba(181,176,176,0.57);
    filter: sepia(0.5);
    opacity: 0.6;
  }
  &:first-child {
    background-image: url('../assets/images/card1.png');
  }
  &:nth-child(2) {
    background-image: url('../assets/images/card2.png');
  }
  &:nth-child(3) {
    background-image: url('../assets/images/card3.png');
  }
  &:last-child {
    background-image: url('../assets/images/card4.png');
  }
}
</style>
<script>
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  computed: {
    total () {
      const drb = this.book.sale / 100
      return this.book.price / (1 - drb)
    }
  }

}
</script>
