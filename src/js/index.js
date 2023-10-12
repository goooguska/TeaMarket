const burgerButton = document.querySelector('.header__burger-link')
const burgerMenu = document.querySelector('.header__bottom-dropdown');
const burgerLink = document.querySelectorAll('.header__bottom-dropdown-menu-button')

burgerButton.addEventListener('click', ()=> {
	burgerButton.classList.toggle('active')
	burgerMenu.classList.toggle("overlay");
})
burgerLink.forEach(e => e.addEventListener('click', () => {
	burgerButton.classList.remove('active');
	burgerMenu.classList.remove('overlay');
  })
);