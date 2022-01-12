const uploadContainer = document.querySelector('.features__slider .images');
const modalImage = document.querySelector('.features__modal img');
const closeIcon = document.querySelector('.features__modal .closeModal')
const nextBtn = document.querySelector('.features__modal .rightSlide')
const leftBtn = document.querySelector('.features__modal .leftSlide')

/*   Change slide on interval   */

let interval = setInterval(changeWithInterval, 4000)
let images = ['./assets/images/blog/1.jpeg','./assets/images/blog/2.jpeg','./assets/images/blog/4.jpeg']
let selectedImgIndex;
renderImages()

function changeWithInterval() {
    if (document.querySelector('.features__modal').style.display === 'flex'){
        nextSlide()
    }else return
}

/*   Functions with keyboard buttons   */

document.addEventListener('keydown', function (e) {
    if (e.code === 'Escape' && (document.querySelector('.features__modal').style.display === 'flex')) {
        closeModal();
    }
    if (e.code === 'ArrowRight') nextSlide()
    if (e.code === 'ArrowLeft') nextSlide()
});

uploadContainer.addEventListener('click', function (e) {
    e.preventDefault()
    if (!e.target.src) return
    selectedImgIndex = e.target.dataset.index
    openModal(images[+selectedImgIndex])
})


/*  Upload image  */


function renderImages() {
    uploadContainer.innerHTML = ''
    images.forEach((file, i) => {
        uploadContainer.innerHTML += ` <a href="${file}"><img data-index="${i}" src="${file}" /></a>`
    });
}

/*   Open Modal   */

function openModal(path) {
    document.querySelector('.features__modal').style.display = 'flex';
    modalImage.setAttribute('src', path);
}

/*   Close Modal   */

function closeModal() {
    document.querySelector('.features__modal').style.display = 'none';
}

/*   Close modal on click close   */

closeIcon.addEventListener('click', ()=>{
    closeModal()
})

/*   Close Modal on click outside   */

document.addEventListener('click', (e)=>{
    if (e.target.classList.contains('features__modal')){
        closeModal()
    }
})

/*   Next slide   */

function nextSlide() {

    if (+selectedImgIndex === images.length - 1 ) {
        modalImage.src = images[0]
        selectedImgIndex = 0
        return;
    }

    modalImage.src = images[+selectedImgIndex + 1]
    selectedImgIndex = +selectedImgIndex + 1
}

nextBtn.addEventListener('click', function () {
    clearInterval(interval)
    nextSlide()
})

function prevSlide() {

    if (+selectedImgIndex === 0){
        modalImage.src = images[images.length - 1]
        selectedImgIndex = images.length - 1

        return;
    }
    modalImage.src = images[+selectedImgIndex - 1]
    selectedImgIndex = +selectedImgIndex - 1
}

leftBtn.addEventListener('click', function () {
    prevSlide()
})