<template>
  <div class="product">
    <Hello/>
    <Header/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias hto /src
import Header from '@/components/Header.vue'
import Hello from '@/components/HelloWorld.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hello,
    Footer
  }
}
</script>
<style scoped lang="less">
@import '../assets/css/style.less';

.product {
  &__wrapper {
    .wrapper();
  }
  &__flex {
    display: flex;
  }
  &__block {
    width: 70vw;
  }
}
</style>
