const items = document.querySelectorAll('.accordion__item')

items.forEach(currentItem => {
    currentItem.addEventListener('click', ()=>{
        if(!currentItem.classList.contains('active')){
            removeClass()
            currentItem.classList.toggle('active')
            return
        }
        removeClass()
    })
})
function removeClass(){
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
    }
}