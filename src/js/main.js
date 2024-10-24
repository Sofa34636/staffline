// const swiper = new Swiper('.swiper-container', {
//   slidesPerView: 1, // Показываем один слайд
//   loop: true, // Цикличная прокрутка слайдов
//   navigation: {
//     nextEl: '.swiper-button-next', // Стрелка вперед
//     prevEl: '.swiper-button-prev', // Стрелка назад
//   },
// });
// 2
// new Swiper('#swiper', {
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   effect: 'slide', // Или 'fade' для плавного эффекта
//   speed: 1200, // Устанавливает скорость перехода между слайдами

//   breakpoints: {
//     900: {
//       slidesPerView: 2.5, // Отображение 1,5 слайда для эффекта "подсказки"
//       loop: true, // Включение бесконечной прокрутки

//       spaceBetween: 30, // Расстояние между слайдами
//       lazyLoading: true, // Ленивое (отложенное) загружаемое изображение
//       centeredSlides: true, // Отключите для теста
//     },
//     // Для экранов с шириной меньше 900px
//     600: {
//       slidesPerView: 1.5, // Показать 1 слайд
//       loop: true, // Включение бесконечной прокрутки

//       spaceBetween: 30, // Расстояние между слайдами
//       lazyLoading: true, // Ленивое (отложенное) загружаемое изображение
//       centeredSlides: true, // Отключите для теста
//     },
//     0: {
//       slidesPerView: 1, // Показать 1 слайд
//       loop: true, // Включение бесконечной прокрутки

//       spaceBetween: 30, // Расстояние между слайдами
//       lazyLoading: true, // Ленивое (отложенное) загружаемое изображение
//       centeredSlides: true, // Отключите для теста
//     },
//   },
// });

// // Полифилл для метода forEach для NodeList
// if (window.NodeList && !NodeList.prototype.forEach) {
//   NodeList.prototype.forEach = function (callback, thisArg) {
//     thisArg = thisArg || window;
//     for (var i = 0; i < this.length; i++) {
//       callback.call(thisArg, this[i], i, this);
//     }
//   };
// }

// // Для впатающего списка
// document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
//   const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
//   const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
//   const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
//   const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

//   dropDownBtn.addEventListener('click', function (e) {
//     e.preventDefault(); // предотвращаем перезагрузку
//     dropDownList.classList.toggle('dropdown__list--visible'); // активируем
//   });

//   dropDownListItems.forEach(function (listItem) {
//     listItem.addEventListener('click', function (e) {
//       e.stopPropagation();
//       dropDownBtn.innerText = this.innerText; // подставляем текст с панелей в кнопку
//       dropDownInput.value = this.dataset.value;
//       dropDownList.classList.remove('dropdown__list--visible');
//     });
//   });

//   document.addEventListener('click', function (e) {
//     if (e.target != dropDownBtn) {
//       dropDownList.classList.remove('dropdown__list--visible');
//     }
//   });

//   document.addEventListener('click', function (e) {
//     if (e.key === 'Tab' || e.key === 'Escape') {
//       dropDownList.classList.remove('dropdown__list--visible');
//     }
//   });
// });

// // Для форм

// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.getElementById('form');
//   form.addEventListener('submit', formSend);

//   async function formSend(e) {
//     e.preventDefault();

//     let error = formValidate(form); // Валидация формы
//     let formData = new FormData(form); // Формируем данные формы

//     if (error === 0) {
//       // Если ошибок нет
//       form.classList.add('_sending');
//       let response = await fetch('sendmail.php', {
//         // Отправка данных на сервер
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         let result = await response.json();
//         alert(result.message);
//         form.reset();
//         form.classList.remove('_sending');
//       } else {
//         alert('Ошибка при отправке');
//         form.classList.remove('_sending');
//       }
//     } else {
//       alert('Заполните обязательные поля');
//     }
//   }

//   function formValidate(form) {
//     let error = 0;
//     let formReq = document.querySelectorAll('._req'); // Обязательные поля

//     formReq.forEach((input) => {
//       formRemoveError(input);

//       if (input.classList.contains('_number')) {
//         if (!validatePhone(input)) {
//           // Валидация номера телефона
//           formAddError(input);
//           error++;
//         }
//       } else {
//         if (input.value === '') {
//           // Проверка на пустое поле
//           formAddError(input);
//           error++;
//         }
//       }
//     });

//     return error; // Возвращаем количество ошибок
//   }

//   function formAddError(input) {
//     // Добавляем ошибку
//     input.parentElement.classList.add('_error');
//     input.classList.add('_error');
//   }

//   function formRemoveError(input) {
//     // Убираем ошибку
//     input.parentElement.classList.remove('_error');
//     input.classList.remove('_error');
//   }

//   function validatePhone(input) {
//     // Проверка телефона (11 цифр)
//     const regex = /^\d{11}$/;
//     return regex.test(input.value);
//   }
// });
