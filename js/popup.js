let LoginButton = document.querySelector ('.login-button');
let LoginPoPup = document.querySelector ('.login-popup');
let buttonClose = document.querySelector ('.button-close')

LoginButton.addEventListener('click', showPopUp) 
buttonClose.addEventListener('click', showPopUp)

function showPopUp(evt) {
    console.log(evt);
    evt.preventDefault();
    LoginPoPup.classList.toggle('show-popup')
}