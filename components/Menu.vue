<template>
<nav class="menu">
  <div class="menu__wrapper">
    <ul class="menu__list">
      <li class="menu__list-item itemactive">
        <a class="menu__list-link" href="cm">Computers</a></li>
      <li class="menu__list-item">
        <a class="menu__list-link" href="c">Cooking</a></li>
      <li class="menu__list-item">
        <a class="menu__list-link" href="e">Education</a></li>
      <li class="menu__list-item">
        <a class="menu__list-link" href="f">Fiction</a></li>
      <li class="menu__list-item">
        <a class="menu__list-link" href="h">Health</a></li>
      <li class="menu__list-item">
        <a class="menu__list-link" href="mt">Mathematics</a></li>
      <li class="menu__list-item">
        <a class="menu__list-link" href="md">Medical</a></li>
      <li class="menu__list-item">
        <a class="menu__list-link" href="r">Reference</a></li>
      <li class="menu__list-item itemactive">
        <a class="menu__list-link" href="s">Science</a></li>
    </ul>
  </div>
</nav>
</template>
<style scoped lang="less">
@import '../assets/css/style.less';
.menu {
  border-bottom: 1px solid @bordercolor;
  height: 50px;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 1060px) {
    height: auto;
  }
  &__wrapper {
    .wrapper();
  }
  &__list {
    display: flex;
    justify-content: center;
    margin: 0;
    height: 50px;
    @media screen and (max-width: 1060px) {
      flex-direction: column;
      height: auto;
    }
    &-item {
      list-style: none;
      margin: 0;
      padding: 10px 21px;
      &:first-child {
        float: left;
      }
      &:last-child {
        float: right;
      }
    }
    &-link {
      font-size: 19px;
      line-height: 26px;
      color: #5b5b5b;
      font-family: @bodyfont;
      margin: 0;
      text-decoration: none;
    }
  }
}
</style>
