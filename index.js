const main = document.querySelector('main')

const card = document.getElementById('card')

const input = document.querySelector('input')

const btn = document.getElementById('btn')

const errMessage = document.getElementById('errMessage')



btn.addEventListener('click', checkValidation)

function checkValidation(e) {



  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {

    card.classList.add('hidden')
    btn.setAttribute('href', 'success.html')
    btn.setAttribute('target', '_blank')

  } else {

    errMessage.classList.remove('hidden')

  }

}
