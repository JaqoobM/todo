const navDrawer = document.querySelector('.nav-drawer');
const navMenu = document.querySelector('.nav__menu');
const blur = document.querySelector('.blur');

const activeBurgerMenu = () => {
	navDrawer.classList.toggle('nav-drawer--active');
	blur.classList.toggle('blur--active');
};

navMenu.addEventListener('click', activeBurgerMenu);
