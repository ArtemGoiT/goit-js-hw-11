import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const galleryEl = document.querySelector('.gallery');

export function imageTemplate(data) {
  const markup = data.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class= "gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-img" src="${webformatURL}" alt="${tags}"
        <div class="image-description">
        <p>Likes: ${likes}</p>
        <p>Views: ${views}</p>
        <p>Comments: ${comments}</p>
        <p>Downloads: ${downloads}</p>
           </div>
           </a>  
        </li>`;
      }
    )
    .join('');
  galleryEl.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionsData: 'alt',
    captionPosition: 'bottom',
  });
  lightbox.refresh();
}

//* import SimpleLightbox from 'simplelightbox';:
//  Этот оператор импортирует библиотеку SimpleLightbox для работы с галереей изображений.

// *import 'simplelightbox/dist/simple-lightbox.min.css';:
// Этот оператор импортирует стили CSS для SimpleLightbox, чтобы стилизовать галерею.

//* export const galleryEl = document.querySelector('.gallery');:
//   Этот оператор находит элемент на веб - странице с классом.gallery и экспортирует его как переменную galleryEl,
// чтобы он мог быть использован в других частях программы.

// *export function imageTemplate(data) {:
//  Этот оператор объявляет функцию imageTemplate, которая принимает данные и создает разметку для галереи изображений на основе этих данных.
//   Внутри функции imageTemplate:
//* const markup = data.hits.map(...):
//   Этот блок кода создает разметку для каждого изображения, используя данные из массива data.hits.

//* galleryEl.insertAdjacentHTML('beforeend', markup);:
// Этот блок кода добавляет созданную разметку в конец контейнера галереи, который был выбран с помощью galleryEl.

//* const lightbox = new SimpleLightbox('.gallery a', { ...});:
// Этот блок кода создает экземпляр объекта SimpleLightbox,
// который инициализирует галерею изображений на элементах < a > внутри элемента с классом.gallery.Также задаются опции галереи,
//   такие как отображение подписей, задержка подписей и т.д.

//* lightbox.refresh();:
// Этот метод обновляет галерею, чтобы учесть новые элементы, добавленные в нее через insertAdjacentHTML.

//! Этот код берет данные, создает разметку для галереи изображений, добавляет ее на веб-страницу и инициализирует галерею с использованием SimpleLightbox.
