<template>
<nav class="tabnav">
  <ul class="tabnav__list">
    <li class="tabnav__list-item tabnav__select">
      <a class="tabnav__list-link">Best Sellers</a>
    </li>
    <li class="tabnav__list-item">
      <a class="tabnav__list-link">New Arrivals</a>
    </li>
    <li class="tabnav__list-item">
      <a class="tabnav__list-link">Used Books</a>
    </li>
    <li class="tabnav__list-item">
      <a class="tabnav__list-link">Special Offers</a>
    </li>
    <li class="tabnav__list-empty">
      text
    </li>
  </ul>
</nav>
</template>
<style scoped lang="less">
@import '../assets/css/style.less';

.tabnav {
  display: flex;
  width: 60vw;
  padding: 0;
  margin: 0;
  margin-top: 15px;
  height: 30px;
  z-index: 10;
  @media (max-width: 1020px) {
    width: auto;
  }
  @media (max-width: 845px) {
    width: 90vw;
  }
  @media (max-width: 615px) {
    height: auto;
    width: 80vw;
  }
  @media (max-width: 350px) {
    margin-left: -20px;
    width: 85vw;
  }
  @media (max-width: 290px) {
    width: 200px;
  }
  @media (max-width: 240px) {
    width: 150px;
  }
  &__select {
    position: relative;
    background: #fff!important;
    border-bottom: 1px solid white!important;
    &:hover {
      .hover()!important;
    }
  }
  &__list {
    display: flex;
    width: 60vw;
    margin: 0;
    @media (max-width: @largetablet) {
      width: 67.7vw;
    }
    @media (max-width: 1060px) {
      width: 87vw;
      margin-left: 20px;
    }
    @media (max-width: 615px) {
      flex-direction: column;
      width: 80vw;
    }
    @media (max-width: 350px) {
      width: 85vw;
    }
    @media (max-width: 290px) {
      width: 200px;
    }
    @media (max-width: 240px) {
      width: 150px;
    }
    &-item {
      padding: 2px 10px;
      font-size: 17px;
      line-height: 30px;
      color: #6b6969;
      width: 10vw;
      font-weight: 300;
      font-family: @pricefont;
      background: linear-gradient(#fff,#f7f7f7);
      filter: drop-shadow(0.5px 0.866px 0px #ffffff);
      border: 1px solid @bordercolor;
      &:hover {
        .hover();
      }
      @media (max-width: @largetablet) {
        width: 42vw;
      }
      @media (max-width: 1060px) {
        width: 30vw;
      }
      @media (max-width: 615px) {
        width: 80vw;
      }
      @media (max-width: 350px) {
        width: 83vw;
      }
      @media (max-width: 290px) {
        width: 180px;
        padding: 2px 10px;
      }
      @media (max-width: 240px) {
        width: 150px;
      }
    }
    &-empty {
      width: 60vw - 10vw * 4;
      background: transparent;
      color: transparent;
      padding: 0 2px;
      border-bottom: 1px solid @bordercolor;
      &:hover {
        background: transparent;
        color: transparent;
      }
      @media (max-width: @largetablet) {
        width: 18vw;
      }
      @media (max-width: 1060px) {
        display: none;
      }
    }
  }
}
</style>
