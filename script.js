const email = document.getElementById('email')
const form = document.getElementById('email-form')

const erNotif = document.getElementById('error')




form.addEventListener('submit', (e) => {

    let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    

    if(email.value.match(emailformat))
    {
        email.classList.add('input-correct')
        error.classList.remove('error-notif')
        
    }
    else if(email.value === ''){
        email.classList.remove('input-correct')
        email.classList.add('input-error')
        error.classList.add('error-notif')
    }

    else 
    {
        email.classList.remove('input-correct')
        email.classList.add('input-error')
        error.classList.add('error-notif')
    }

    e.preventDefault()

})
