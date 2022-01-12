const register = document.querySelector('form')
const username = document.querySelector('#name')
const email = document.querySelector('#email')


register.addEventListener('submit', (e)=>{
    e.preventDefault()

    const user = {
        username: username.value,
        useremail: email.value
    }


    localStorage.setItem('user', JSON.stringify(user))
    console.log(JSON.parse(localStorage.getItem('user')));


})



