window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 80){
        document.querySelector('header').classList.add('fixed')
    }else document.querySelector('header').classList.remove('fixed')
})

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu-hamburger');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})