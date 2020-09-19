<template>
  <div class="home">
    <Hello/>
    <Header/>
    <div class="home__wrapper home__flex">
      <Banner/>
      <Promo/>
    </div>
    <div class="home__wrapper">
      <Catlist/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Hello from '@/components/HelloWorld.vue'
import Catlist from '@/components/Catlist.vue'
import Banner from '@/components/Banner.vue'
import Promo from '@/components/Promo.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hello,
    Catlist,
    Banner,
    Promo
  }
}
</script>
<style scoped lang="less">
@import '../assets/css/style.less';

.home {
  &__wrapper {
    .wrapper();
  }
  &__flex {
    display: flex;
  }
}
</style>
