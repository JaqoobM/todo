const navDrawer = document.querySelector('.nav-drawer');
const navMenu = document.querySelector('.nav__menu');
const blur = document.querySelector('.blur');
const checkbox = document.querySelector('.task-box__checkbox');

const activeBurgerMenu = () => {
	navDrawer.classList.toggle('nav-drawer--active');
	blur.classList.toggle('blur--active');
};

const activeCheck = () => {
	if (checkbox.checked == true) {
		console.log('działa');
	}
}

navMenu.addEventListener('click', activeBurgerMenu);
checkbox.addEventListener('click', activeCheck)