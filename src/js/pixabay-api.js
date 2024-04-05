export function fetchImages(query) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const KEY_API = '?key=32952239-1d47564a6cdd6d985205bb869';
  const PARAMS = `&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  const url = BASE_URL + END_POINT + KEY_API + PARAMS;

  return fetch(url)
    .then(res => {
      return res.json();
    })
    .catch(err => {
      throw new Error(err.status);
    });
}

// *   export function fetchImages(query) {:
//  Это объявление функции с именем fetchImages, которая экспортируется из модуля для использования в других частях программы.Она принимает один аргумент query.

// *    const BASE_URL = 'https://pixabay.com';:
// Это объявление константы BASE_URL, которая содержит базовый URL - адрес для запросов к API Pixabay.

//  *   const END_POINT = '/api/';:
//  Это объявление константы END_POINT, которая содержит конечную точку(endpoint) API, к которой будет осуществлен запрос.

//  *   const KEY_API = '?key=32952239-1d47564a6cdd6d985205bb869';:
// Это объявление константы KEY_API, которая содержит ключ API Pixabay, необходимый для аутентификации при запросах.

//  *   const PARAMS = &q=${query}&image_type=photo&orientation=horizontal&safesearch=true;:
// Это объявление константы PARAMS, которая содержит параметры запроса, включая поисковый запрос(query), тип изображения, ориентацию, и флаг безопасного поиска.

//   *  const url = BASE_URL + END_POINT + KEY_API + PARAMS;:
//  Это объявление переменной url, которая содержит полный URL - адрес для запроса к API Pixabay, объединяя базовый URL, конечную точку, ключ API и параметры запроса.

//   *  return fetch(url):
// Это выполнение запроса с использованием метода fetch() для получения данных по указанному URL - адресу.

//   *  .then(res => { return res.json(); }):
// Это обработка ответа от сервера в формате JSON.Метод res.json() извлекает тело ответа в формате JSON.

//*     .catch(err => { throw new Error(err.status); });:
// Это обработка ошибок.Если запрос завершается неудачно, код выбрасывает исключение с кодом состояния ошибки.

//! Этот код выполняет запрос к API Pixabay для получения изображений в соответствии с заданным запросом и параметрами,
// ! а затем обрабатывает результат или ошибку в зависимости от успешности запроса.
