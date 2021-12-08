const images = [
    'https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/4038971/pexels-photo-4038971.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/6850496/pexels-photo-6850496.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/6621052/pexels-photo-6621052.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/5273316/pexels-photo-5273316.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/5359802/pexels-photo-5359802.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/6621339/pexels-photo-6621339.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/7078025/pexels-photo-7078025.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
]

window.onload = () => {
    const galleryListEl = document.querySelector('.gallery__list')
    for(const item of images) {
        const itemEl = generateGalleryItemEl(item);
        galleryListEl.appendChild(itemEl);
    }
}

function toggleLightbox (imgSrc) {
    const lightbox = document.querySelector('.lightbox');
   
    if(imgSrc) {
        changeLightboxImageSrc(imgSrc);
    }

    lightbox.classList.toggle('show');
}

function changeLightboxImageSrc (src) {
    const lightboxImg = document.querySelector('.lightbox__image')
    lightboxImg.setAttribute('src', src)
}

function generateGalleryItemEl (imgSrc) {
    const item = document.createElement('div');
    item.className = "gallery__item";
    item.addEventListener('click', () => {
        toggleLightbox(imgSrc);
    })
    const imgEl = document.createElement('img');
    imgEl.src = imgSrc;

    item.appendChild(imgEl);
    return item;
}

function getCurrentActiveIdx () {
    const lightboxImg = document.querySelector('.lightbox__image');
    return images.findIndex(item => item === lightboxImg.getAttribute('src'));
}

function handleGoPrev () {
    let prevIdx = getCurrentActiveIdx() - 1;
    if(prevIdx < 0) {
        prevIdx = images.length - 1;
    }
    changeLightboxImageSrc(images[prevIdx])
}

function handleGoNext () {
    let nextIdx = getCurrentActiveIdx() + 1;
    if(nextIdx > images.length - 1) {
        nextIdx = 0;
    }
    changeLightboxImageSrc(images[nextIdx])
}

