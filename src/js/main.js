const navDrawer = document.querySelector('.nav-drawer');
const navMenu = document.querySelector('.navbar-top__menu');
const blur = document.querySelector('.blur');
const checkLabel = document.querySelectorAll('.task-box__check-label');
const addBtn = document.querySelector('.navbar-bottom__circle');
const body = document.querySelector('body');
const createTaskBox = document.querySelector('.create-task-box');

const activeBurgerMenu = () => {
	navDrawer.classList.toggle('nav-drawer--active');
	blur.classList.toggle('blur--active');

	if (body.style.overflow == 'hidden') {
		body.style.overflow = 'visible';
	} else {
		body.style.overflow = 'hidden';
	}
};

const activeCheck = (e) => {
	const label = e.target;
	const task = label.parentElement.parentElement;

	label.classList.toggle('task-box__check-label--active');
	task.classList.toggle('task-box__task--active');
};

const addPopup = () => {
	console.log('działa');
	createTaskBox.classList.add('create-task-box--active');
};

navMenu.addEventListener('click', activeBurgerMenu);
addBtn.addEventListener('click', addPopup);
checkLabel.forEach((x) => {
	x.addEventListener('click', activeCheck);
});
