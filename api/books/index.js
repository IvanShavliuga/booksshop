const books = [
    { id: 22, img: 'book_7.jpg', author: 'Js-guru', title: 'Nuxt.js инструкция по применению', price: 25, likes: 32, sale: 0, desc: 'Документация' },
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
  function index() {
    return books;
  }
  function show({ id }) {
    return books.filter((el) => el.id === +id)
  }
export  { index, show }