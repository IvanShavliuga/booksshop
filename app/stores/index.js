import { defineStore } from "pinia";
export const useIndexStore = defineStore("index", {
  state: () => ({
    baseimgurl: "https://ivanshavliuga.github.io/simples/photos/booksshop/",
    slider: [
      {
        bg: "banner_1.jpg",
        book: "book_1.jpg",
        author: "Lee Child",
        title: "A Wanted men",
        subtitle: "(Jack Reacher #17)",
      },
      {
        bg: "banner_2.jpg",
        book: "book_2.jpg",
        author: "Havinder Singh",
        title: "Can Love You Happy Twice",
        subtitle: "(The Hare Amber Eyes)",
      },
      {
        bg: "banner_3.jpg",
        book: "book_3.jpg",
        author: "Girichi Kundli",
        title: "Marathon Baba",
        subtitle: "(The Hare Amber Eyes)",
      },
    ],
    user: {
      name: "Alex",
      country: "UK",
      total: 45,
      purchase: [1, 3, 5],
      like: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      authflag: true,
    },
    playlist: [],
    books: [],
  }),
  getters: {
    playlist: (state) => {
      return state.playlist;
    },
    user: (state) => {
      return state.user;
    },
    books: (state) => {
      return state.books;
    },
    slider: (state) => {
      return state.slider;
    },
    baseimgurl: (state) => {
      return state.baseimgurl;
    },
  },
  actions: {
    syncUser() {
      let total = 0;
      if (this.books.length) {
        for (let ind = 0; ind < this.user.purchase.length; ind++) {
          total += this.books[state.user.purchase[ind] - 1].price;
        }
      }
      this.user.total = total;
    },
    setUser(user) {
      this.user = user || null;
    },
    syncPlaylist(arr) {
      this.playlist = arr;
    },
    syncBooks(books) {
      this.books = books || [];
    },
  },
});
