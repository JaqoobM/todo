const navDrawer = document.querySelector('.nav-drawer');
const navMenu = document.querySelector('.navbar-top__menu');
const blur = document.querySelector('.blur');
const taskCheckbox = document.querySelectorAll('.tasks__task-checkbox');
const addBtn = document.querySelector('.navbar-bottom__circle');
const body = document.querySelector('body');
const createTaskBox = document.querySelector('.create-task-box');
const closeBtn = document.querySelector('.create-task-box__btn-close');
const task = document.querySelectorAll('.tasks__task-bar');
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
	const checkbox = e.target;
	const task = checkbox.parentElement.children[0];
	checkbox.classList.toggle('tasks__task-checkbox--color');
	task.classList.toggle('tasks__task-bar--color');
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
	blur.style.zIndex = 4;

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

navMenu?.addEventListener('click', activeBurgerMenu);
closeBtn?.addEventListener('click', closePopup);
closeBtnEdit?.addEventListener('click', closePopup);
addBtn?.addEventListener('click', showAddPopup);
taskCheckbox?.forEach((x) => x.addEventListener('click', activeCheck));
task?.forEach((x) => x.addEventListener('click', showEditPopup));
