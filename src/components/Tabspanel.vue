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
  </ul>
</nav>
</template>
<style scoped lang="less">
@import '../assets/css/style.less';

.tabnav {
  display: flex;
  padding: 0;
  margin: 0;
  margin-top: 15px;
  height: 30px;
  &__select {
    background: #fff!important;
    border-bottom: none!important;
    &-hover {
      color: black;
      font-weight: bold;
    }
  }
  &__list {
    display: flex;
    margin: 0;
    &-item {
      padding: 2px 10px;
      font-size: 17px;
      line-height: 30px;
      color: #6b6969;
      font-weight: 300;
      font-family: "Helvetica";
      background: linear-gradient(#fff,#f7f7f7);
      filter: drop-shadow(0.5px 0.866px 0px #ffffff);
      border: 1px solid @bordercolor;
    }
  }
}
</style>
