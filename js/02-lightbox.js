import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const images = document.querySelector('.gallery');

const galleryMarkup = createGalleryItems(galleryItems);

images.insertAdjacentHTML('afterbegin', galleryMarkup);


let gallery = new SimpleLightbox('.gallery__item', { 
    captionsData: 'alt',
    captionDelay: 250 
});




function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => 
    {return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`}
    ).join('');
}