import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.dir(galleryItems);

const gallery = document.querySelector('.gallery');
gallery.style.listStyle = 'none';
// console.dir(gallery);

gallery.insertAdjacentHTML('afterbegin', createMarkUp(galleryItems));
// gallery.addEventListener("click", handlerClick);

function createMarkUp(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
       </li>`
    )
    .join('');
}

const lightbox = new SimpleLightbox('.gallery__link', {
  captionDelay: 250,
  captionsData: 'alt',
});
