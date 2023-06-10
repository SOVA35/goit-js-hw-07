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
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `
    }).join("");
}
 galleryContainer.insertAdjacentHTML('beforeend', markupGallery);


galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick (evt) {
    evt.preventDefault();
  if (!evt.target.classList.contains("gallery__item")) {
    return;
  }
  onGalleryContainerClick = basicLightbox.create(`
<img src="${evt.target.dataset.sourse}" width="800" height="600">
`)
  onGalleryContainerClick.show();

 
}




   


