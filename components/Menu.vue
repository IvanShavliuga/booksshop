<template>
<nav class="menu">
  <div class="menu__wrapper">
    <div class="menu__collapse">
      <input id="menu__collapse-toggle" type="checkbox" />
      <label class="menu__collapse-btn" for="menu__collapse-toggle">
        <span></span>
      </label>
      <ul class="menu__list">
        <li class="menu__list-item itemactive">
          <a class="menu__list-link" href="cm">Computers</a>
        </li>
        <li class="menu__list-item">
          <a class="menu__list-link" href="c">Cooking</a>
        </li>
        <li class="menu__list-item">
          <a class="menu__list-link" href="e">Education</a>
        </li>
        <li class="menu__list-item">
          <a class="menu__list-link" href="f">Fiction</a>
        </li>
        <li class="menu__list-item">
          <a class="menu__list-link" href="h">Health</a>
        </li>
        <li class="menu__list-item">
          <a class="menu__list-link" href="mt">Mathematics</a>
        </li>
        <li class="menu__list-item">
          <a class="menu__list-link" href="md">Medical</a>
        </li>
        <li class="menu__list-item">
          <a class="menu__list-link" href="r">Reference</a>
        </li>
        <li class="menu__list-item">
          <a class="menu__list-link" href="s">Science</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<style scoped lang="less">
@import '../assets/css/style.less';
.menu {
  margin: 0;
  padding: 0;
  height: 50px;
  border-bottom: 1px solid @bordercolor;
  @media screen and (max-width: 1060px) {
    height: auto;
  }
  &__wrapper {
    .wrapper();
  }
  &__collapse {
    .burger();
  }
  &__list {
    display: flex;
    justify-content: center;
    margin: 0;
    height: auto;
    margin-top: -15px;
    @media screen and (max-width: 1060px) {
      position: static;
      top: 20px;
      left: 0;
      width: 100%;
      height: 0;
      flex-direction: column;
      height: auto;
      z-index: 50;
      display: none;
    }
    &-item {
      list-style: none;
      margin: 0;
      padding: 10px 21px;
      width: 100%;
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
#menu__collapse-toggle {
  opacity: 0;
}
#menu__collapse-toggle:checked ~ .menu__collapse-btn > span {
  transform: rotate(45deg);
}
#menu__collapse-toggle:checked ~ .menu__collapse-btn > span::before {
  top: 0;
  transform: rotate(0);
}
#menu__collapse-toggle:checked ~ .menu__collapse-btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menu__collapse-toggle:checked ~ .menu__list {
  position: sticky;
  overflow-y: scroll;
  z-index: 60;
  display: block;
  margin-top: 30px;
  width: 100%;
  box-shadow: 1px 1px 7px 7px rgba(10,10,10,0.5);
  /*width: 50%;
  left: 100px;
  top: 150px;*/
  background-color: white;
  @media screen and (min-width: 1061px) {
    position: static;
    display: flex;
    justify-content: center;
    margin: 0;
    height: 42px;
    margin-top: -15px;
    flex-direction: row;
    box-shadow: none;
  }
  .menu__list-item {
    @media screen and (max-width: 1260px) {
      padding: 10px 5px;
    }
  }
}

</style>
