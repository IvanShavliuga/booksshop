<template>
<ul class="icons">
  <li class="icons__item">
    <ib class="icons__image"
      icon-name="codepen"
      width="64"
      height="64"
      icon-color="#5434ad">
      <codepen/>
    </ib>
  </li>
  <li class="icons__item">
    <ib class="icons__image"
      icon-name="telegram"
      width="64"
      height="64"
      icon-color="#5434ad">
      <telegram/>
    </ib>
  </li>
  <li class="icons__item">
    <ib class="icons__image"
      icon-name="github"
      width="64"
      height="64"
      icon-color="#5434ad">
      <github/>
    </ib>
  </li>
  <li class="icons__item">
    <ib class="icons__image"
      icon-name="linkedin"
      width="64"
      height="64"
      icon-color="#5434ad">
      <linkedin/>
    </ib>
  </li>
  <li class="icons__item">
    <ib class="icons__image"
      icon-name="vk"
      width="64"
      height="64"
      icon-color="#5434ad">
      <vk/>
    </ib>
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
export default {
  components: {
    ib,
    codepen,
    vk,
    github,
    telegram,
    linkedin
  }
}
</script>
<style scoped lang="less">
@import '../../assets/css/style.less';
.icons {
  display: flex;
  justify-content: flex-start;
  width: 350px;
  &__item {
    padding: 3px;
    margin: 0;
    border: 1px solid @bordercolor;
    transform: scale(0.6);
    background: linear-gradient(#f7f7f7,#a7a7a7);
  }
  &__image {
    margin: 0;
    transform: scale(0.6);
  }
}
</style>
