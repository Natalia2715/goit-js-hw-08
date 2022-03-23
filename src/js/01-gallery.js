// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
function createGalleryItem() {
    return galleryItems.map(item => `<a class="gallery__item" href="${item.original}">
        <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}" 
        />
    </a>`).join('');    
}

gallery.innerHTML = createGalleryItem();

gallery.addEventListener("click", fullImg);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });

function fullImg(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return lightbox;
    }
    }