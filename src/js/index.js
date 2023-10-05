const dropdowns = document.querySelectorAll('.header-bottom__dropdown-menu');
const body = document.querySelector('body');

dropdowns.forEach(dropdown => {
	const select = dropdown.querySelector(
		'.header-bottom__dropdown-menu-category-name'
	);
	const arrow = dropdown.querySelector('.arrow');
	const menu = dropdown.querySelector('.header-bottom__dropdown-menu-content');
	const options = dropdown.querySelectorAll(
		'.header-bottom__dropdown-menu-content li'
	);

	select.addEventListener('click', () => {
		arrow.classList.toggle('arrow-rotate');
		menu.classList.toggle('header-bottom__dropdown-menu-content-open');
		console.log('aaa');
		event.stopPropagation();
	});

	options.forEach(option => {
		option.addEventListener('click', () => {
			arrow.classList.remove('arrow-rotate');
			menu.classList.remove('header-bottom__dropdown-menu-content-open');
			option.classList.remove('header-bottom__dropdown-menu-category-name');
			event.stopPropagation();
		});
	});

	arrow.addEventListener('click', () => {
		arrow.classList.toggle('arrow-rotate');
		menu.classList.toggle('header-bottom__dropdown-menu-content-open');
		event.stopPropagation();
	});
});

body.addEventListener('click', () => {
	dropdowns.forEach(dropdown => {
		const arrow = dropdown.querySelector('.arrow');
		const menu = dropdown.querySelector(
			'.header-bottom__dropdown-menu-content'
		);
		arrow.classList.remove('arrow-rotate');
		menu.classList.remove('header-bottom__dropdown-menu-content-open');
	});
});
