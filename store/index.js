import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Axios)
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
  books: [
    { id: 1, img: 'book_7.jpg', author: 'Братья Стругацкие', title: 'Обитаемый остров', price: 10, likes: 25, sale: 0, desc: 'Главный герой попадает на планету и совершает революцию.' },
    { id: 2, img: 'book_8.jpg', author: 'Михаил Лермонтов', title: 'Герой нашего времени', price: 15, likes: 13, sale: 0, desc: 'Главный герой рушит все вокруг себя и погибает сам' },
    { id: 3, img: 'book_9.jpg', author: 'Федор Достовевский', title: 'Преступление и наказание', price: 13, sale: 0, likes: 65, desc: 'Герой из принципа идет на убийство' },
    { id: 4, img: 'book_10.jpg', author: 'Андрей Цифровой', title: 'Алгоритм как он есть', price: 10, sale: 0, likes: 25, desc: 'Основый программирования -- алгоритмы' },
    { id: 5, img: 'book_0.jpg', author: 'Виктор Коневский', title: 'За доброй надеждой', price: 10, sale: 0, likes: 25, desc: 'Роман странствие' },
    { id: 6, img: 'book_0.jpg', author: 'Михаил Жванецкий', title: 'Избранное', price: 15, likes: 13, sale: 0, desc: 'Самые лучшие шутки самого известного сатирика' },
    { id: 7, img: 'book_0.jpg', author: 'Алексей Толстой', title: 'Гиперболоид инженера Гарина', price: 32, sale: 0, likes: 65, desc: 'Роман о попытке осчастливить человечество' },
    { id: 8, img: 'book_0.jpg', author: 'Алексей Толстой', title: 'Петр Первый', price: 10, likes: 25, desc: 'О жизни императора России Петра Первого' },
    { id: 9, img: 'book_0.jpg', author: 'Лев Толстой', title: 'Война и мир', price: 9, likes: 54, sale: 0, desc: 'События 1812 года' },
    { id: 10, img: 'book_0.jpg', author: 'Александр Пушкин', title: 'Стихи и поэмы', price: 32, likes: 13, sale: 45, desc: 'Избранные стихи и поэмы великого поэта' },
    { id: 11, img: 'book_0.jpg', author: 'Станислав Лем', title: 'Солярис', price: 17, likes: 65, sale: 0, desc: 'Роман о разумном океане' },
    { id: 12, img: 'book_0.jpg', author: 'Михаил Лермонтов', title: 'Стихи', price: 16, likes: 44, sale: 25, desc: 'Избранные стихи поэта' },
    { id: 13, img: 'book_0.jpg', author: 'Артур Конан Дойл', title: 'Рассказы о Шерлоке Холмса', price: 32, sale: 25, likes: 65, desc: 'Рассказы о великом сыщике' },
    { id: 14, img: 'book_0.jpg', author: 'Юлиан Семенов', title: 'Семнадцать мгновений весны', price: 89, sale: 25, likes: 25, desc: 'Как наша развездка боролось с фашизмом' },
    { id: 15, img: 'book_0.jpg', author: 'Евгений Лукин', title: 'С нами бот', price: 13, likes: 67, sale: 25, desc: 'Современный роман о боте ' },
    { id: 16, img: 'book_0.jpg', author: 'Михаил Задорнов', title: 'Избранное', price: 12, likes: 13, sale: 25, desc: 'Самые лучшие шутки самого известного сатирика' },
    { id: 17, img: 'book_0.jpg', author: 'Владмимир Даль', title: 'Словарь русского языка', price: 7, sale: 0, likes: 10, desc: 'Словарь русского языка' },
    { id: 18, img: 'book_0.jpg', author: 'Андрей Цифровой', title: 'Компьютер как он есть', price: 7, sale: 0, likes: 12, desc: 'Устройство персонального компьютера для чайников' },
    { id: 19, img: 'book_0.jpg', author: 'Андрей Цифровой', title: 'Сервер как он есть', price: 7, sale: 0, likes: 21, desc: 'Принципы работы сервера' },
    { id: 20, img: 'book_0.jpg', author: 'Александр Пушкин', title: 'Капитанская дочка', price: 7, sale: 0, likes: 23, desc: 'Роман о Пугачевском бунте' },
    { id: 21, img: 'telepat.jpg', author: 'Иван Шавлюга', title: 'Телепатия. Проклятие языка', price: 10, sale: 45, likes: 23, desc: 'Графомания в чистом виде' }
  ]
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
  SYNC_USER(state) {
    let total = 0
    for(let ind=0; ind<state.user.purchase.length; ind++) {
      total += state.books[state.user.purchase[ind]-1].price
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
  }
}
