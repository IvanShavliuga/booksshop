import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      Name: 'Alex',
      Coutry: 'UK',
      price: 45,
      Purchase: [1],
      MyLike: [1]
    },
    books: [
      { id: 1, author: 'Братья Стругацкие', title: 'Обитаемый остров', price: 10, likes: 25, description: 'Главный герой попадает на планету и совершает революцию.' },
      { id: 2, author: 'Михаил Лермонтов', title: 'Герой нашего времени', price: 15, likes: 13, description: 'Главный герой рушит все вокруг себя и погибает сам' },
      { id: 3, author: 'Федор Достовевский', title: 'Преступление и наказание', price: 13, likes: 65, description: 'Герой из принципа идет на убийство' },
      { id: 4, author: 'Андрей Цифровой', title: 'Алгоритм как он есть', price: 10, likes: 25, description: 'Основый программирования -- алгоритмы' },
      { id: 5, author: 'Виктор Коневский', title: 'За доброй надеждой', price: 10, likes: 25, description: 'Роман странствие' },
      { id: 6, author: 'Михаил Жванецкий', title: 'Избранное', price: 15, likes: 13, description: 'Самые лучшие шутки самого известного сатирика' },
      { id: 7, author: 'Алексей Толстой', title: 'Гиперболоид инженера Гарина', price: 32, likes: 65, description: 'Роман о попытке осчастливить человечество' },
      { id: 8, author: 'Алексей Толстой', title: 'Петр Первый', price: 10, likes: 25, description: 'О жизни императора России Петра Первого' },
      { id: 9, author: 'Лев Толстой', title: 'Война и мир', price: 9, likes: 54, description: 'События 1812 года' },
      { id: 10, author: 'Александр Пушкин', title: 'Стихи и поэмы', price: 32, likes: 13, description: 'Избранные стихи и поэмы великого поэта' },
      { id: 11, author: 'Станислав Лем', title: 'Солярис', price: 17, likes: 65, description: 'Роман о разумном океане' },
      { id: 12, author: 'Михаил Лермонтов', title: 'Стихи', price: 16, likes: 44, description: 'Избранные стихи поэта' },
      { id: 13, author: 'Артур Конан Дойл', title: 'Рассказы о Шерлоке Холмса', price: 32, likes: 65, description: 'Рассказы о великом сыщике' },
      { id: 14, author: 'Юлиан Семенов', title: 'Семнадцать мгновений весны', price: 89, likes: 25, description: 'Как наша развездка боролось с фашизмом' },
      { id: 15, author: 'Евгений Лукин', title: 'С нами бот', price: 13, likes: 67, description: 'Современный роман о боте ' },
      { id: 16, author: 'Михаил Задорнов', title: 'Избранное', price: 12, likes: 13, description: 'Самые лучшие шутки самого известного сатирика' },
      { id: 17, author: 'Владмимир Даль', title: 'Словарь русского языка', price: 7, likes: 10, description: 'Словарь русского языка' },
      { id: 18, author: 'Андрей Цифровой', title: 'Компьютер как он есть', price: 7, likes: 12, description: 'Устройство персонального компьютера для чайников' },
      { id: 19, author: 'Андрей Цифровой', title: 'Сервер как он есть', price: 7, likes: 21, description: 'Принципы работы сервера' },
      { id: 20, author: 'Александр Пушкин', title: 'Капитанская дочка', price: 7, likes: 23, description: 'Роман о Пугачевском бунте' }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
