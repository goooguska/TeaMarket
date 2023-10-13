
const sliderLine = document.querySelector('.teafind__content-slider-line')
let width = 275;
const teaCards = document.querySelectorAll('.teafind__content-slider-slide-item');
let count = 0;
document.querySelector('.teafind__slider-button-prev').addEventListener('click', ()=>{
	count--
	if (count <0){
		count =  teaCards.length - 1
	}
	rollSlider()
})
document.querySelector('.teafind__slider-button-next').addEventListener('click', ()=>{
	count++
	if (count >= teaCards.length){
		count = 0
	}
	rollSlider()
})
function rollSlider () {
	sliderLine.style.transform = 'translate(-'+ count * width + 'px)';
}




