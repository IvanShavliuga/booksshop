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
  @media screen and (max-width: 1020px) {
    width: auto;
  }
  @media screen and (max-width: 845px) {
    width: 90vw;
  }
  @media screen and (max-width: 580px) {
    height: auto;
    width: 80vw;
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
    @media screen and (max-width: 1200px) {
      width: 67.7vw;
    }
    @media screen and (max-width: 1060px) {
      width: 87vw;
      margin-left: 20px;
    }
    @media screen and (max-width: 580px) {
      flex-direction: column;
      width: 80vw;
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
      @media screen and (max-width: 1200px) {
        width: 42vw;
      }
      @media screen and (max-width: 1060px) {
        width: 30vw;
      }
      @media screen and (max-width: 580px) {
        width: 80vw;
      }
      @media screen and (max-width: 440px) {
        width: 80vw;
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
      @media screen and (max-width: 1200px) {
        width: 18vw;
      }
      @media screen and (max-width: 1060px) {
        display: none;
      }
    }
  }
}
</style>
