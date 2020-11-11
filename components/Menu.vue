<template>
<nav class="menu">
  <div class="menu__wrapper">
    <div class="menu__collapse">
      <input id="menu__collapse-toggle" type="checkbox" />
      <label class="menu__collapse-btn" for="menu__collapse-toggle">
        <span></span>
      </label>
      <ul class="menu__list">
        <li :class="['menu__list-item', (k==select)?'itemactive':'']"
           v-for="(l, k) in links">
          <a class="menu__list-link" :href="'/'+l">{{l}}</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
export default {
  data () {
    return {
      links: [
        "Computers",
        "Cooking",
        "Education",
        "Fiction",
        "Health",
        "Mathematics",
        "Medical",
        "Reference",
        "Science"
      ],
      select: 2
    }
  }
}
</script>
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
      margin: 0;
      text-decoration: none;
    }
  }
}
#menu__collapse-toggle {
  opacity: 0;
}
.burgercheck();
</style>
