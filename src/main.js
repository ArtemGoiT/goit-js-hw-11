import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api';
import { galleryEl } from './js/render-functions';
import { imageTemplate } from './js/render-functions';

const formEl = document.querySelector('.img-search-form');
const loaderEl = document.querySelector('.loader');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  galleryEl.innerHTML = '';
  loaderEl.classList.remove('hidden');
  const query = e.target.elements.query.value.trim();
  fetchImages(query).then(data => {
    if (data.totalHits === 0 || query === '') {
      loaderEl.classList.add('hidden');
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: 'white',
        backgroundColor: 'red',
        position: 'topRight',
      });
    } else {
      loaderEl.classList.add('hidden');
      imageTemplate(data);
    }
  });
  e.target.reset();
}

// ! Импорт библиотек и модулей:
//     iziToast: Библиотека для вывода всплывающих уведомлений.
//     izitoast/dist/css/iziToast.min.css: Стилевой файл для iziToast.
//     fetchImages из ./js/pixabay-api: Функция для получения данных изображений из API Pixabay.
//     galleryEl и imageTemplate из ./js/render-functions: Элемент галереи и функция для отображения изображений в галерее.

// !Объявление переменных:
//     formEl: Элемент формы поиска изображений.
//     loaderEl: Элемент индикатора загрузки.

//! Обработчик события формы submit (onFormSubmit):
//     Этот обработчик вызывается при отправке формы поиска.
//     e.preventDefault(); предотвращает стандартное поведение формы (перезагрузку страницы).
//     galleryEl.innerHTML = ''; очищает галерею от предыдущих результатов.
//     loaderEl.classList.remove('hidden'); показывает индикатор загрузки.
//     Получает поисковый запрос из формы и убирает лишние пробелы (query).
//     Вызывает функцию fetchImages(query) для получения данных изображений из API Pixabay.
//     В зависимости от результата запроса выводит соответствующее сообщение с помощью iziToast или отображает полученные изображения с помощью imageTemplate.
//     e.target.reset(); сбрасывает содержимое формы после отправки.

// ! Обработка ответа от API:
//     После отправки запроса к API Pixabay с помощью fetchImages, код ожидает ответа.
//     Если количество результатов равно нулю или поисковый запрос пустой, скрывается индикатор загрузки, и выводится сообщение об ошибке с помощью iziToast.
//     В противном случае, скрывается индикатор загрузки, и вызывается функция imageTemplate для отображения полученных изображений в галерее.
