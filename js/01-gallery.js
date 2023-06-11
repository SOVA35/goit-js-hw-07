import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
  
const markupGallery = createGalleryItemsMarkup(galleryItems);


// galleryContainer.preventDefault();

function createGalleryItemsMarkup(galleryItems) {
   return galleryItems.map(({ original, preview, description }) => {
        return `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `
   }).join("");
}
 galleryContainer.insertAdjacentHTML('beforeend', markupGallery);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick (evt) {
    evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
const instance = basicLightbox.create(`
<img src="${evt.target.dataset.source}" width="800" height="600">
`)
  instance.show();
  
  document.addEventListener("keydown", evt => {
    if (evt.key !== "Escape") {
      return;
    } else instance.close();
  });
document.removeEventListener("keydown", evt);
  
}



   


