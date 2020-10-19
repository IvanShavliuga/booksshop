<template>
  <aside class="aside">
    <h2 class="aside__header">Categories</h2>
    <div class="aside__collapse">
      <input id="aside__collapse-toggle" type="checkbox" />
      <label class="aside__collapse-btn" for="aside__collapse-toggle">
        <span></span>
      </label>
      <a class="aside__collapse-title">Categories</a>
      <nav class="aside__nav">
        <ul>
          <li class="aside__nav-item itemactive"><a class="aside__nav-link" href="#cat"> All</a></li>
          <li class="aside__nav-item"><a class="aside__nav-link" href="#cat"> Fiction & Literature</a></li>
          <ul class="aside__nav-list">
            <li class="aside__nav-cat"><a class="aside__nav-link" href="#cat"> Children</a></li>
            <li class="aside__nav-cat"><a class="aside__nav-link" href="#cat"> Science</a></li>
            <li class="aside__nav-cat"><a class="aside__nav-link" href="#cat"> Fantasy</a></li>
            <li class="aside__nav-cat"><a class="aside__nav-link" href="#cat"> Mystery</a></li>
            <li class="aside__nav-cat"><a class="aside__nav-link" href="#cat"> Romance</a></li>
            <li class="aside__nav-cat"><a class="aside__nav-link" href="#cat"> Horror</a></li>
            <li class="aside__nav-cat"><a class="aside__nav-link" href="#cat"> Poetry</a></li>
            <li class="aside__nav-cat"><a class="aside__nav-link" href="#cat"> Literature</a></li>
            <li class="aside__nav-cat"><a class="aside__nav-link" href="#cat"> Crime</a></li>
          </ul>
          <li class="aside__nav-item"><a class="aside__nav-link" href="#cat"> Non - Fiction</a></li>
          <ul class="aside__nav-list">
            <li class="aside__nav-cat"><a class="aside__nav-link" href="#cat"> Comic</a></li>
            <li class="aside__nav-cat"><a class="aside__nav-link" href="#cat"> Cook</a></li>
            <li class="aside__nav-cat"><a class="aside__nav-link" href="#cat"> Psychology</a></li>
            <li class="aside__nav-cat"><a class="aside__nav-link" href="#cat"> Medical</a></li>
            <li class="aside__nav-cat"><a class="aside__nav-link" href="#cat"> Art</a></li>
            <li class="aside__nav-cat"><a class="aside__nav-link" href="#cat"> Photography</a></li>
            <li class="aside__nav-cat"><a class="aside__nav-link" href="#cat"> Law</a></li>
            <li class="aside__nav-cat"><a class="aside__nav-link" href="#cat"> History</a></li>
            <li class="aside__nav-cat"><a class="aside__nav-link" href="#cat"> Business</a></li>
            <li class="aside__nav-cat"><a class="aside__nav-link" href="#cat"> Computers</a></li>
          </ul>
          <li class="aside__nav-item"><a class="aside__nav-link" href="#cat"> Other</a></li>
          <ul class="aside__nav-list">
            <li class="aside__nav-cat"><a class="aside__nav-link" href="#cat"> Baby</a></li>
            <li class="aside__nav-cat"><a class="aside__nav-link" href="#cat"> Sex</a></li>
            <li class="aside__nav-cat"><a class="aside__nav-link" href="#cat"> Travel</a></li>
            <li class="aside__nav-cat"><a class="aside__nav-link" href="#cat"> Science</a></li>
            <li class="aside__nav-cat"><a class="aside__nav-link" href="#cat"> Sport`s</a></li>
          </ul>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../assets/css/style.less';
.cat1  {
  font-weight: bold;
}
.aside {
  width: 20vw;
  margin: 0 15px;
  padding: 0;
  border: 1px solid @bordercolor;
  @media screen and (max-width: 1060px) {
    position: relative;
    width: 1vw;
    border: none;
    margin: 0;
    margin-right: 30px;
    margin-top: 30px;
  }
  &__size {
    position: absolute;
    transform: rotateZ(90deg);
    left: -100px;
    top: 270px;
    font-size: 20px;
    color: #ff0;
    padding: 0 15px;
    background-color: #da45c6;
    width: 200px;
  }
  &__collapse {
    .burger();
    /*@media screen and (max-width: 925px) {
      left: -25px;
    }
    @media screen and (max-width: 910px) {
      left: -5px;
    }*/
    &-btn {
      @media screen and (max-width:  670px) {
        left: 20px;
      }
    }
    &-btn > span::before {
      content: '';
      top: -4px;
      left: 10px;
      width: 15px;
      transform: rotate(25deg);
    }
    &-btn > span::after {
      content: '';
      top: 4px;
      left: 10px;
      width: 15px;
      transform: rotate(-25deg);
    }
    &-title {
      position: absolute;
      transform: rotateZ(90deg);
      left: -120px;
      top: 100px;
      font-size: 25px;
      line-height: 42px;
      text-transform: uppercase;
      color: #434343;
      @media screen and (max-width: 925px) {
        left: -120px;
      }
      @media screen and (max-width: 670px) {
        left: -110px;
      }
    }
    &-burger {
      position: absolute;
      left: -5px;
      top: -40px;
    }
  }
  &__header {
    padding: 0 20px;
    margin-bottom: 0;
    font-size: 24px;
    line-height: 30px;
    color: #6b6969;
    font-weight: 300;
    font-family: @bodyfont;
    @media screen and (max-width: 1060px) {
      display: none;
    }
  }
  &__nav {
    margin-top: 0;
    @media screen and (max-width: 1060px) {
      display: none;
    }
    &-list {
      padding: 0 20px;
    }
    &-cat {
      border-bottom: 1px solid @bordercolor;
      font-size: 15px;
      line-height: 27px;
      color: #555454;
      font-family: @bodyfont;
    }
    &-item {
      padding: 5px 20px;
      font-size: 17px;
      line-height: 32px;
      color: #525252;
      font-weight: bold;
      font-family: @bodyfont;
      .hover();
      &:first-child {
        text-transform: uppercase;
      }
    }
    &-link {
      font-size: 15px;
      line-height: 26px;
      color: #5b5b5b;
      font-family: @bodyfont;
      margin: 0;
      text-decoration: none;
    }
  }
}
#aside__collapse-toggle {
  opacity: 0;
}
#aside__collapse-toggle:checked ~ .aside__collapse-btn > span {
  transform: rotate(45deg);
}
#aside__collapse-toggle:checked ~ .aside__collapse-btn > span::before {
  top: 0;
  left: 0;
  width: 100%;
  transform: rotate(0);
}
#aside__collapse-toggle:checked ~ .aside__collapse-btn > span::after {
  top: 0;
  left: 0;
  width: 100%;
  transform: rotate(90deg);
}
#aside__collapse-toggle:checked ~ .aside__nav {
  position: sticky;
  overflow-y: scroll;
  z-index: 60;
  display: block;
  margin-top: 15px;
  width: 25vw;
  margin-left: -15px;
  box-shadow: 1px 1px 7px 7px rgba(10,10,10,0.5);
  /*width: 50%;
  left: 100px;
  top: 150px;*/
  background-color: white;
  .aside__nav-item {
    display: block;
  }
  .aside__nav-link {
    display: block;
  }
  @media screen and (max-width:  915px) {
    margin-left: 12px;
  }
  @media screen and (max-width:  915px) {
    width: 250px;
  }
  @media screen and (max-width:  670px) {
    margin-left: 22px;
  }
  /*@media screen and (min-width: 1061px) {
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
  }*/
}
#aside__collapse-toggle:checked ~ .aside__collapse-title {
  transform: rotateZ(0);
  top: 2px;
  left: -12px;
  z-index: 60;
  background-color: white;
}
</style>
