const form = document.querySelector('#inputs')
const button = document.querySelector('#submit')
console.log(form);

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const firstName = form.querySelector('#first-name')
    const secondName = form.querySelector('#second-name')

    if(!firstName.checkValidity()){
        firstName.placeholder = ''
    }
})
