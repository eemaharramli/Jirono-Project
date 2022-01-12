const container = document.querySelector('.container')
const images = document.querySelectorAll('.images a')
const bigImg = document.querySelector('.popup img')
const modal = document.querySelector('.features__modal')
const modalImage = document.querySelector('.features__modal img')
const closeModalBtn = document.querySelector('span.closeModal')
const prevSlideBtn = document.querySelector('span.leftSlide')
const nextSlideBtn = document.querySelector('span.rightSlide')

prevSlideBtn.addEventListener('click', ()=>{
    slidePrev()
})

nextSlideBtn.addEventListener('click', ()=>{
    slideNext()
})

closeModalBtn.addEventListener('click', ()=>{
    closePopup()
})

images.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        e.preventDefault()
        let path = e.target.parentNode.getAttribute('href')
        openModal(path)
        e.target.parentNode.classList.add("active");
    })
})

modal.addEventListener('click', (e)=>{
    if(e.target.classList.contains('modal')){
        closePopup()
    }
})

function openModal(path) {
    modal.style.display = 'flex'
    modal.style.zIndex = '100'
    modalImage.setAttribute('src', path)
}
document.addEventListener('keydown', (e)=>{
    if(e.code === 'Escape'){
        closePopup()
    }
})

document.addEventListener('keydown', (e)=>{
    if (e.keyCode === 39 && (container.style.display = 'flex')) {
        slideNext()
    }
})

document.addEventListener('keydown', (e)=>{
    if (e.keyCode === 37 && (container.style.display = 'flex')) {
        slidePrev()
    }
})

function slidePrev() {
    let active = document.querySelector('.active');

    removeActiveClass()
    let prevImage = null;
    let previousElement = active.previousElementSibling;
    if (previousElement === null) {
        let last = images[images.length - 1]
        prevImage = last.getAttribute('href')
        last.classList.add('active')
    }else{
        prevImage = active.previousElementSibling.getAttribute('href')
    }
    modalImage.setAttribute('src', prevImage)
    active.previousElementSibling.classList.add('active')
}

function slideNext() {
    let active = document.querySelector('.active');

    removeActiveClass()
    let nextImage = null;
    let nextElement = active.nextElementSibling
    if (nextElement === null) {
        nextImage = images[0].getAttribute("href");
        images[0].classList.add('active');
    }
    else {
        nextImage = active.nextElementSibling.getAttribute('href')
    }

    modalImage.setAttribute('src', nextImage)
    active.nextElementSibling.classList.add('active')
}

function closePopup(){
    modal.style.display = 'none'
}

function checkUser(username){
    if (username.value.length !== 0 && username.value !== 'null'){
        container.style.display = 'flex'
        firstPage.style.display = 'none'
    }else alert('Please input the username')
}

function removeActiveClass(){
    images.forEach(image => {
        image.classList.remove('active')
    })
}