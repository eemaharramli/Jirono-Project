addCount(96, document.querySelector('#complete'))
addCount(190, document.querySelector('#customer'))
addCount(12, document.querySelector('#staff'))
addCount(46, document.querySelector('#projects'))



function addCount(count, element) {
    let i = 0
    const counter = setInterval(() => {
        element.innerHTML = i
        if(i === count) clearInterval(counter)
        i++
    }, 50);
}