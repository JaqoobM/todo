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
	const task = label.parentElement.parentElement

	label.classList.toggle('task-box__check-label--active');
	task.classList.toggle('task-box__task--active');
};

navMenu.addEventListener('click', activeBurgerMenu);
checkLabel.forEach((x) => {
	x.addEventListener('click', activeCheck);
});
