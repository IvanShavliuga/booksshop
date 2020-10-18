<template>
<nav class="menu">
  <div class="menu__wrapper">
    <div class="menu__collapse">
      <a class="menu__collapse-title">Menu</a>
      <a class="menu__collapse-burger">
        <svg xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          role="presentation"
        >
          <title lang="en">menu</title>
          <g stroke="#76ae89" fill="transparent">
            <line x1="2" y1="14" x2="30" y2="14"/>
            <line x1="2" y1="20" x2="30" y2="20"/>
            <line x1="2" y1="26" x2="30" y2="26"/>
          </g>
        </svg>
      </a>
    </div>
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
  &__collapse {
    width: 100%;
    height: 40px;
    @media screen and (min-width: 1061px) {
      display: none;
    }
    &-title {
      float: left;
      font-size: 28px;
      line-height: 42px;
      text-transform: uppercase;
      color: #ccc;
      @media screen and (max-width: 910px) {
        margin-left: 15px;
      }
    }
    &-burger {
      float: right;
      @media screen and (max-width: 910px) {
        margin-right: 15px;
      }
    }
  }
  &__list {
    display: flex;
    justify-content: center;
    margin: 0;
    height: 50px;
    @media screen and (max-width: 1060px) {
      flex-direction: column;
      height: auto;
      display: none;
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
