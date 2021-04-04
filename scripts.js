const slider = document.querySelector('.slider');
const johnImage = document.querySelector('.john-image');
const tanyaImage = document.querySelector('.tanya-image');
const johnContent = document.querySelector('.card__content--john')
const tanyaContent = document.querySelector('.card__content--tanya')

slider.addEventListener('click', () => {

    if(johnImage.style.opacity == 0) {
        johnImage.classList.toggle('show')
        tanyaImage.classList.toggle('hide')
    } else {
        johnImage.classList.toggle('hide')
        tanyaImage.classList.toggle('show')
    }

    if(johnContent.style.opacity == 0) {
        johnContent.classList.toggle('show');
        tanyaContent.classList.toggle('hide')
    }
})
