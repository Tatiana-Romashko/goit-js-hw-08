import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
const imageGallery = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`
  )
  .join(``);

imageGallery.insertAdjacentHTML(`beforeend`, markup);

function lightboxFunction() {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: `alt`,
    captionDelay: `250`,
  });
}
lightboxFunction();
