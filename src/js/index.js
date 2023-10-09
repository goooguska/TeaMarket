const burgerButton = document.querySelector('.header__burger-link')
const burgerMenu = document.querySelector('.header__bottom-dropdown');

burgerButton.addEventListener('click', ()=> {
	burgerButton.classList.add('close')
	burgerMenu.classList.toggle("overlay");


})