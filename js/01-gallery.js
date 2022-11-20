import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const images = document.querySelector('.gallery');

const galleryMarkup = createGalleryItems(galleryItems);


images.insertAdjacentHTML('afterbegin', galleryMarkup);

const clickToImagesChange = e => {
    console.log(e.target);
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    }


    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);
instance.show();


    images.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            instance.close();
        }
    })
}





images.addEventListener('click', clickToImagesChange);





function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => 
    {return `<div class="gallery__item">    
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </div>`}
    ).join('');
}
