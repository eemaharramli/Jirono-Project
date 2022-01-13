addCount(96, document.querySelector('#complete'), 35)
addCount(190, document.querySelector('#customer'), 15)
addCount(12, document.querySelector('#staff'), 190)
addCount(46, document.querySelector('#projects'), 30)

function addCount(count, element, milliseconds) {
    let i = 0
    const counter = setInterval(() => {
        element.innerHTML = i
        if(i === count) clearInterval(counter)
        i++
    }, milliseconds);
}