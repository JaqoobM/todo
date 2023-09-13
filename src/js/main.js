const navDrawer = document.querySelector('.nav-drawer');
const navMenu = document.querySelector('.nav__menu');
const blur = document.querySelector('.blur');
const checkLabel = document.querySelectorAll('.task-box__check-label');

const activeBurgerMenu = () => {
	navDrawer.classList.toggle('nav-drawer--active');
	blur.classList.toggle('blur--active');
};

const activeCheck = (e) => {
	const label = e.target;
	if (label.classList.contains('task-box__check-label--active')) {
		label.classList.remove('task-box__check-label--active');
	} else {
		label.classList.add('task-box__check-label--active');
	}
};

navMenu.addEventListener('click', activeBurgerMenu);
checkLabel.forEach((x) => {
	x.addEventListener('click', activeCheck);
});
