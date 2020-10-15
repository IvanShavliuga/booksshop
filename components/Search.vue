<template>
  <form class="search">
    <input class="search__input" type="text">
    <button class="search__button">
      <i class="search__icon">&nbsp;</i>
      Search
    </button>
  </form>
</template>
<style scoped lang="less">
@import '../assets/css/style.less';
.search {
  width: 457px;
  height: 42px;
  border-radius: 2px;
  background-color: @bgform;
  border: 3px solid @bgform;
  padding: 0;
  display: flex;
  &__input {
    width: 327px;
    height: 36px;
    margin-top: -1px;
    border: 3px solid @bgform;
    color: @bgform;
    font-size: 26px;
    text-decoration: none;
    display: block;
  }
  &__button {
    width: 457px - 327px - 17px;
    height: 38px;
    margin-left: 5px;
    padding-left: 30px;
    display: block;
    border: 2px solid @bgform;
    background-color: @bgform;
    font-size: 23px;
    color: #ffffff;
    font-family: @bodyfont;
    position: relative;
  }
  &__icon {
    background-image: url('../assets/images/search.svg');
    background-size: 100%;
    width: 18px;
    height: 18px;
    display: block;
    position: absolute;
    z-index: 10;
    top: 7px;
    left: 7px;
  }
}
</style>
