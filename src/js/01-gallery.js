import { galleryItems } from "./gallery-items.js";

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи

const galleryRew = document.querySelector(".gallery");

const markupGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join(" ");

galleryRew.innerHTML = markupGallery;
console.log(galleryItems);

// Реализация делегирования на div.gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.

galleryRew.addEventListener("click", onPictureClick);

function onPictureClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();
}

// Добавь закрытие модального окна по нажатию клавиши Escape. Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно. У библиотеки basicLightbox есть метод для программного закрытия модального окна.

galleryRew.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    instance.close();
  }
});
