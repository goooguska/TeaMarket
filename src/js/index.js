
	const dropdowns = document.querySelectorAll('.header-bottom__dropdown-menu');
	dropdowns.forEach(dropdown => {
		const select = document.querySelector('.header-bottom__dropdown-menu__category-name')
		const arrow = dropdown.querySelector('.arrow');
		const menu = dropdown.querySelector('.header-bottom__dropdown-menu__content');
		const options = dropdown.querySelectorAll('.header-bottom__dropdown-menu__content li');
		select.addEventListener('click', () =>{
			arrow.classList.toggle('arrow-rotate');
			menu.classList.toggle('header-bottom__dropdown-menu__content-open')
			console.log("aaa");
		});
		options.forEach(option =>{
			option.addEventListener('click',() => {
				arrow.classList.remove('arrow-rotate');
				menu.classList.remove('header-bottom__dropdown-menu__content-open');
				option.classList.remove('header-bottom__dropdown-menu__category-name')
				options.forEach(option =>{
					option.classList.remove('header-bottom__dropdown-menu__category-name')
				})
				option.classList.add('header-bottom__dropdown-menu__category-name')
			})
		})
	
	
	
	
	})




// function dropDown(){
// 	let selectedOption = select.options[select.selectedIndex].value;
  
//   console.log("Выбрана опция: " + selectedOption);
// }options.forEach(option =>{

