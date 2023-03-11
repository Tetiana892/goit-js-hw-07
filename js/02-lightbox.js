import { galleryItems } from "./gallery-items.js";

const galleryRew = document.querySelector(".gallery");

const markupGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
  )
  .join(" ");

galleryRew.insertAdjacentHTML("afterbegin", markupGallery);
console.log(galleryItems);

galleryRew.addEventListener("click", onPictureClick);

function onPictureClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
}
let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250
});
