import Vue from 'vue'
import Vuex from 'vuex'
// import Axios from 'axios'

// Vue.use(Axios)
Vue.use(Vuex)

export const  state = () =>({
  baseimgurl: 'https://ivanshavliuga.github.io/simples/photos/booksshop/',
  slider: [{
    bg: 'banner_1.jpg',
    book: 'book_1.jpg',
    author: 'Lee Child',
    title: 'A Wanted men',
    subtitle: '(Jack Reacher #17)'
  }, {
    bg: 'banner_2.jpg',
    book: 'book_2.jpg',
    author: 'Havinder Singh',
    title: 'Can Love You Happy Twice',
    subtitle: '(The Hare Amber Eyes)'
  }, {
    bg: 'banner_3.jpg',
    book: 'book_3.jpg',
    author: 'Girichi Kundli',
    title: 'Marathon Baba',
    subtitle: '(The Hare Amber Eyes)'
  }],
  user: {
    name: 'Alex',
    country: 'UK',
    total: 45,
    purchase: [1,3,5],
    like: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
    authflag: true
  },
  playlist: [],
  books: []
})
export const  getters = {
  playlist: state=>{return state.playlist},
  user: state=>{return state.user},
  books: state=>{return state.books},
  slider: state=>{return  state.slider},
  baseimgurl: state=>{return state.baseimgurl}
}
export const mutations = {
  SET_USER(state, user) {
      state.user = user || null;
  },
  SYNC_BOOKS(state, books) {
    state.books = books || [];
  },
  SYNC_USER(state) {
    let total = 0
    if (state.books.length) {
      for(let ind=0; ind<state.user.purchase.length; ind++) {
        total += state.books[state.user.purchase[ind]-1].price
      }
    }
    state.user.total = total
  },
  SYNC_PLAYLIST(state, arr) {
    /*let arr;
    let dt = Axios.get(url)
      .then(response => response.data)
      .then(response => (this.arr=response))
      state.playlist = dt
      let dt = fetch(url).then(res =>
        res.json()
      )*/
    state.playlist = arr
    //console.log(state.playlist, 'arr '+arr)
  }
}
export const actions = {
  syncUser({commit}) {
    commit('SYNC_USER')
  },
  syncPlaylist({commit}, arr) {
    commit('SYNC_PLAYLIST', arr)
  },
  syncBooks({commit}, dta) {
    commit('SYNC_BOOKS', dta)
  }
}
