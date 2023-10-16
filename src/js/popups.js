// const morePopup = document.querySelector('.more__popup')
// const moreButtonOpen = document.querySelector('.teafind__content-sidebar-more')
// moreButton.addEventListener('click', ()=>{
// 	morePopup.classList.remove('.none')
	
// })

const moreButtonOpen = document.querySelector('.teafind__content-sidebar-more')
const none = document.querySelector('.none')
const moreButtonClose = document.querySelector('.more__popup-card-img')
moreButtonOpen.addEventListener('click', (event) => {
	none.classList.remove('none')

})
moreButtonClose.addEventListener('click', (event) => none.classList.add('none'))
