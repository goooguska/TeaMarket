const sliderLine = document.querySelector('.teafind__content-slider-line');
const teaCards = document.querySelectorAll('.teafind__content-slider-slide');
let width = 255;
let count = 0;
let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.teafind__slider-button-prev').addEventListener('click', ()=>{
	count--
	if (count < 0){
		count = teaCards.length - 1;
	}
	rollSlider();
});

document.querySelector('.teafind__slider-button-next').addEventListener('click', ()=>{
	count++
	if (count >= teaCards.length){
		count = 0;
	}
	rollSlider();
});

sliderLine.addEventListener('touchstart', (event) => {
	touchStartX = event.changedTouches[0].clientX;
});

sliderLine.addEventListener('touchend', (event) => {
	touchEndX = event.changedTouches[0].clientX;
	handleSwipe();
});

function handleSwipe() {
	if (touchEndX < touchStartX) {
		count++;
		if (count >= teaCards.length) {
			count = 0;
		}
	} else if (touchEndX > touchStartX) {
		count--;
		if (count < 0) {
			count = teaCards.length - 1;
		}
	}
	rollSlider();
}

function rollSlider() {
	sliderLine.style.transform = 'translate(-'+ count * width + 'px)';

}


