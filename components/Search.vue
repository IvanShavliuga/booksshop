<template>
  <form class="search">
    <input class="search__input" type="text">
    <button class="search__button">
      <i class="search__icon">&nbsp;</i>
      <span class="search__btntext">Search</span>
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
  @media (max-width: 1035px) {
    width: 430px;
  }
  @media (max-width: 965px) {
    width: 380px;
  }
  @media (max-width: 820px) {
    border: 1px solid @bgform;
    width: 360px;
  }
  @media (max-width: @smalltablet) {
    width: 90%;
  }
  &__input {
    width: 327px;
    height: 36px;
    margin-top: -1px;
    border: 3px solid @bgform;
    color: @bgform;
    font-size: 26px;
    text-decoration: none;
    display: block;
    @media (max-width: 1035px) {
      width: 307px;
    }
    @media (max-width: 965px) {
      width: 247px;
    }
    @media (max-width: 820px) {
      border: 1px solid @bgform;
      margin-top: 1px;
    }
    @media (max-width: @smalltablet) {
      width: 90%;
    }
  }
  &__button {
    width: 457px - 327px - 17px;
    height: 38px;
    margin-left: 5px;
    padding-left: 30px;
    display: block;
    border: 2px solid @bgform;
    background-color: @bgform;
    font-size: 20px;
    color: #ffffff;
    position: relative;
    @media (max-width: 820px) {
      width: 457px - 327px - 24px;
    }
    @media (max-width: @smalltablet) {
      width: 150px;
    }
    @media (max-width: 350px) {
      width: 40px;
    }
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
  &__btntext {
    @media (max-width: 350px) {
      display:none;
    }
  }
}
</style>
