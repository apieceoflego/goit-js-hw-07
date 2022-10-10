import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const itemOfGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join('');

const markupOfGallery = gallery.insertAdjacentHTML('afterbegin', itemOfGallery);

const galleryLink = document.querySelector('.gallery__link');

gallery.addEventListener('click', selectImage);

function selectImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  galleryLink.href = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${galleryLink.href}" width="800" height="600">
`);

  instance.show();

  const galleryClose = document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}
