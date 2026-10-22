<template>
  <main class="home">
    <Hello />
    <Header />
    <div class="home__wrapper home__flex">
      <Banner />
      <Promo v-if="promo" :book="promo" @generate="generate" />
    </div>
    <div class="home__wrapper home__flex">
      <Catlist @select-category="selCategory" />
      <div class="home__block">
        <Tabspanel />
        <Booklist />
      </div>
    </div>
    <Footer />
  </main>
</template>

<script setup>
// @ is an alias hto /src
 import {onMounted, ref} from 'vue'  
 
//  import { useNuxtApp } from 'nuxt/app'
//  const app = useNuxtApp()
//  const { fetch } = app
//  console.log(app)
     const promo = ref( {
        author: "Rick Smolan, Jennifer Erwitt",
        title: "The Human Face of Big Data",
        sale: 45,
        price: 27.51,
        img: "https://ivanshavliuga.github.io/simples/photos/booksshop/book_4.jpg",
      })
  
    // async generate() {
    //   await this.$fetch('/api/books/generate', {
    // method: 'POST'})
    //   // ("/api/books/generate");
    // },
     function selCategory(cat) {
       getBooksQuery(cat);
    }
    async function  getBooksQuery(cat = "all") {
      console.log('enter book', fetch)
      await $fetch(`/api/books${cat !== "all" ? "?category=" + cat : ""}`)
        .then((d) => {
          console.log(d)
          // this.promo =
          //   d.filter((el) => el.id === ~~(Math.random() * d.length - 1))[0] ??
          //   d[0];
        }).catch((e)=> new Error(e))
    }
  onMounted( async() => {
    console.log('mounted')
    await getBooksQuery()
  })
</script>
<style scoped lang="less">
@import "../assets/css/style.less";

.home {
  margin: 0;
  padding: 0;
  &__wrapper {
    .wrapper();
  }
  &__flex {
    display: flex;
    width: 90%;
  }
  &__block {
    width: 100%;
    /*@media screen and (max-width: 845px) {
      width: 90vw;
      margin: 0 auto;
    }*/
  }
}
</style>
