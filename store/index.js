import Vue from 'vue'
import Vuex from 'vuex'

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
    purchase: [1],
    like: [1],
    authflag: true
  },
  books: [
    { id: 1, author: 'Братья Стругацкие', title: 'Обитаемый остров', price: 10, likes: 25, desc: 'Главный герой попадает на планету и совершает революцию.' },
    { id: 2, author: 'Михаил Лермонтов', title: 'Герой нашего времени', price: 15, likes: 13, desc: 'Главный герой рушит все вокруг себя и погибает сам' },
    { id: 3, author: 'Федор Достовевский', title: 'Преступление и наказание', price: 13, likes: 65, desc: 'Герой из принципа идет на убийство' },
    { id: 4, author: 'Андрей Цифровой', title: 'Алгоритм как он есть', price: 10, likes: 25, desc: 'Основый программирования -- алгоритмы' },
    { id: 5, author: 'Виктор Коневский', title: 'За доброй надеждой', price: 10, likes: 25, desc: 'Роман странствие' },
    { id: 6, author: 'Михаил Жванецкий', title: 'Избранное', price: 15, likes: 13, desc: 'Самые лучшие шутки самого известного сатирика' },
    { id: 7, author: 'Алексей Толстой', title: 'Гиперболоид инженера Гарина', price: 32, likes: 65, desc: 'Роман о попытке осчастливить человечество' },
    { id: 8, author: 'Алексей Толстой', title: 'Петр Первый', price: 10, likes: 25, desc: 'О жизни императора России Петра Первого' },
    { id: 9, author: 'Лев Толстой', title: 'Война и мир', price: 9, likes: 54, desc: 'События 1812 года' },
    { id: 10, author: 'Александр Пушкин', title: 'Стихи и поэмы', price: 32, likes: 13, desc: 'Избранные стихи и поэмы великого поэта' },
    { id: 11, author: 'Станислав Лем', title: 'Солярис', price: 17, likes: 65, desc: 'Роман о разумном океане' },
    { id: 12, author: 'Михаил Лермонтов', title: 'Стихи', price: 16, likes: 44, desc: 'Избранные стихи поэта' },
    { id: 13, author: 'Артур Конан Дойл', title: 'Рассказы о Шерлоке Холмса', price: 32, likes: 65, desc: 'Рассказы о великом сыщике' },
    { id: 14, author: 'Юлиан Семенов', title: 'Семнадцать мгновений весны', price: 89, likes: 25, desc: 'Как наша развездка боролось с фашизмом' },
    { id: 15, author: 'Евгений Лукин', title: 'С нами бот', price: 13, likes: 67, desc: 'Современный роман о боте ' },
    { id: 16, author: 'Михаил Задорнов', title: 'Избранное', price: 12, likes: 13, desc: 'Самые лучшие шутки самого известного сатирика' },
    { id: 17, author: 'Владмимир Даль', title: 'Словарь русского языка', price: 7, likes: 10, desc: 'Словарь русского языка' },
    { id: 18, author: 'Андрей Цифровой', title: 'Компьютер как он есть', price: 7, likes: 12, desc: 'Устройство персонального компьютера для чайников' },
    { id: 19, author: 'Андрей Цифровой', title: 'Сервер как он есть', price: 7, likes: 21, desc: 'Принципы работы сервера' },
    { id: 20, author: 'Александр Пушкин', title: 'Капитанская дочка', price: 7, likes: 23, desc: 'Роман о Пугачевском бунте' }
  ]
})
export const  getters = {
  user: state=>{return state.user},
  slider: state=>{return  state.slider},
  baseimgurl: state=>{return state.baseimgurl}
}
