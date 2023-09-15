const navDrawer = document.querySelector('.nav-drawer');
const navMenu = document.querySelector('.navbar-top__menu');
const blur = document.querySelector('.blur');
const checkLabel = document.querySelectorAll('.task-box__check-label');
const addBtn = document.querySelector('.navbar-bottom__circle');
const body = document.querySelector('body');
const createTaskBox = document.querySelector('.create-task-box');
const closeBtn = document.querySelector('.create-task-box__btn-close');
const task = document.querySelectorAll('.task-box__task');
const editTaskBox = document.querySelector('.edit-task-box');
const closeBtnEdit = document.querySelector('.edit-task-box__btn-close');

const bodyStop = () => {
	if (body.style.overflow == 'hidden') {
		body.style.overflow = 'visible';
	} else {
		body.style.overflow = 'hidden';
	}
};

const activeBurgerMenu = () => {
	navDrawer.classList.toggle('nav-drawer--active');
	blur.classList.toggle('blur--active');
	bodyStop();
};

const activeCheck = (e) => {
	const label = e.target;
	const task = label.parentElement.parentElement;
	label.classList.toggle('task-box__check-label--active');
	task.classList.toggle('task-box__task--active');
};

const showAddPopup = () => {
	createTaskBox.classList.add('create-task-box--active');
	blur.classList.add('blur--active');
	blur.style.zIndex = 4;

	bodyStop();
};

const showEditPopup = () => {
	editTaskBox.classList.add('edit-task-box--active');
	blur.classList.add('blur--active');
	blur.style.zIndex = '';

	bodyStop();
};

const closePopup = () => {
	createTaskBox.classList.remove('create-task-box--active');
	editTaskBox.classList.remove('edit-task-box--active');
	const input = document.querySelectorAll('input');
	input.forEach((x) => (x.value = ''));
	blur.classList.remove('blur--active');
	blur.style.zIndex = '';

	bodyStop();
};

navMenu.addEventListener('click', activeBurgerMenu);
closeBtn.addEventListener('click', closePopup);
closeBtnEdit.addEventListener('click', closePopup);
addBtn.addEventListener('click', showAddPopup);
checkLabel.forEach((x) => x.addEventListener('click', activeCheck));
task.forEach((x) => x.addEventListener('click', showEditPopup));
