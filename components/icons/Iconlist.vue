<template>
<ul class="icons">
  <li class="icons__item">
    <a class="icons__link" href="https://www.codepen.io/ivanshavliuga">
      <ib class="icons__image"
        icon-name="codepen"
        width="64"
        height="64"
        icon-color="#1223cb">
        <codepen/>
      </ib>
    </a>
  </li>
  <li class="icons__item">
    <a class="icons__link" href="https://t.me/ivanshavliuga">
      <ib class="icons__image"
        icon-name="telegram"
        width="64"
        height="64"
        icon-color="#1223cb">
        <telegram/>
      </ib>
    </a>
  </li>
  <li class="icons__item">
    <a class="icons__link" href="https://www.github.com/IvanShavliuga">
      <ib class="icons__image"
        icon-name="github"
        width="64"
        height="64"
        icon-color="#1223cb">
        <github/>
      </ib>
    </a>
  </li>
  <li class="icons__item">
    <a class="icons__link" href="https://www.linkedin.com/in/%D0%B8%D0%B2%D0%B0%D0%BD-%D0%B8%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2-%D1%88%D0%B0%D0%B2%D0%BB%D1%8E%D0%B3%D0%B0-778540153/">
      <ib class="icons__image"
        icon-name="linkedin"
        width="64"
        height="64"
        icon-color="#1223cb">
        <linkedin/>
      </ib>
    </a>
  </li>
  <li class="icons__item">
    <a class="icons__link" href="https://www.vk.com/isshavluga">
      <ib class="icons__image"
        icon-name="vk"
        width="64"
        height="64"
        icon-color="#1223cb">
        <vk/>
      </ib>
    </a>
  </li>
  <li class="icons__item">
    <a class="icons__link" href="https://ivanshavliuga.github.io">
      <ib class="icons__image"
        icon-name="portfolio"
        width="64"
        height="64"
        icon-color="#1223cb">
        <portfolio/>
      </ib>
    </a>
  </li>
</ul>
</template>
<script>
import ib from './IconBase.vue'
import codepen from './codepen.vue'
import telegram from './telegram.vue'
import github from './github.vue'
import linkedin from './linkedin.vue'
import vk from './vk.vue'
import portfolio from './portfolio.vue'
export default {
  components: {
    ib,
    codepen,
    vk,
    github,
    telegram,
    linkedin,
    portfolio
  }
}
</script>
<style scoped lang="less">
@import '../../assets/css/style.less';
.icons {
  display: flex;
  justify-content: flex-start;
  width: 350px;
  @media (max-width: 520px) {
    width: 300px;
    flex-wrap: wrap;
  }
  &__item {
    padding: 3px;
    margin: 0;
    border: 1px solid @bordercolor;
    transform: scale(0.6);
    background: linear-gradient(#f7f7f7,#b7b7b7);
  }
  &__image {
    margin: 0;
    transform: scale(0.6);
  }
}
</style>
