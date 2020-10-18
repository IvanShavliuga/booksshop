<template>
  <aside class="aside">
    <h2 class="aside__header">Categories</h2>
    <div class="aside__collapse">
      <a class="aside__collapse-title">Categories</a>
      <a class="aside__collapse-burger">
        <svg xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          role="presentation"
        >
          <title lang="en">menu</title>
          <g stroke="#46ae49" fill="transparent">
            <line x1="20" y1="12" x2="30" y2="20"/>
            <line x1="2" y1="20" x2="30" y2="20"/>
            <line x1="20" y1="28" x2="30" y2="20"/>
          </g>
        </svg>
      </a>
    </div>
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
  </aside>
</template>

<script>
export default {
  name: 'Hello'
}
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
  &__collapse {
    position: absolute;
    left: -35px;
    top: 10px;
    padding: 0 15px;
    width: 1vw;
    height: 250px;
    z-index: 50;
    height: 40px;
    @media screen and (min-width: 1061px) {
      display: none;
    }
    @media screen and (max-width: 925px) {
      left: -25px;
    }
    @media screen and (max-width: 910px) {
      left: -5px;
    }
    &-title {
      position: absolute;
      transform: rotateZ(90deg);
      left: -70px;
      top: 50px;
      font-size: 25px;
      line-height: 42px;
      text-transform: uppercase;
      color: #434343;
      @media screen and (max-width: 925px) {
        left: -65px;
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
</style>
