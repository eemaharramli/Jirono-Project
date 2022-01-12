const username = document.querySelector('#name')
const email = document.querySelector('#email')
const comment = document.querySelector('#comment')
const submit = document.querySelector('.features__credentials button')
const newComment = document.querySelector('.features__things')


submit.addEventListener('click', (e)=>{
    e.preventDefault()
    if(username.value.trim() !== '' && email.value.trim() !== '' && comment.value.trim() !== ''){
        newComment.innerHTML += `
            <div class="comment">
                <div class="user__img">
                    <img src="./assets/images/user/comment-avatar.png" alt="user image">
                </div>
                <div class="user__info">
                    <div class="username">
                        ${username.value}
                    </div>
                    <div class="comment-date">
                        ${new Date().getMinutes()}
                    </div>
                    <div class="comment-content">
                        <p>
                            ${comment.value}
                        </p>
                    </div>
                </div>
            </div>
        `

        resetValues()

        const count = document.querySelector('.comments__count > span')
        count.innerHTML = +count.innerHTML + 1;

    }
    else{
        console.log('empty');
    }
})

function resetValues() {
    username.value = ''
    email.value = ''
    comment.value = ''
}