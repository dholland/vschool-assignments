// get elements
const inputVal = document.getElementById('title');
const list = document.getElementById('list');
const submitBtn = document.getElementById('submitBtn');
let editing = false;

const completed = 'fa-check-circle';
const notComplete = 'fa-circle-thin';
const strikeout = 'lineThrough';
let LIST = [];
let id = 0;
let currentEl = '';

function addTodo(toDo, id, done, del) {
	if (del) {
		return;
	}

	const isDone = done ? completed : notComplete;
	const line = done ? strikeout : '';

	const text = `
			<li class='item'>
				<i class="fa ${isDone} co" id="${id}" job='complete'></i>
				<div class="text ${line}">${toDo}</div>
				<i class="fa fa-edit edit" job='edit' id="${id}"></i>
				<i class="fa fa-trash de" job='delete' id="${id}"></i>
			</li>
		`;

	const position = 'beforeend';

	list.insertAdjacentHTML(position, text);
}

function updateTodo() {
	newVal = inputVal.value;
	currentEl.parentNode.querySelector('.text').textContent = newVal;
	LIST[currentEl.id].name = newVal;
	console.log(newVal);
	console.log(LIST[0].name);
	editing = false;
	submitBtn.textContent = 'Add ToDo';
	inputVal.value = '';
}

function toDoAdded(e, currentEl) {
	if (!editing) {
		if (e.keyCode == 13 || e.type == 'click') {
			const toDo = inputVal.value;
			if (toDo) {
				addTodo(toDo, id, false, false);
				LIST.push({
					name: toDo,
					id: id,
					done: false,
					del: false,
				});
			}
			inputVal.value = '';
			id++;
		}
	} else {
		if (e.keyCode == 13 || e.type == 'click') {
			updateTodo(currentEl);
		}
	}
}

document.addEventListener('keyup', toDoAdded);
submitBtn.addEventListener('click', toDoAdded);

function completeTodo(element) {
	element.classList.toggle(completed);
	element.classList.toggle(notComplete);
	element.parentNode.querySelector('.text').classList.toggle('lineThrough');
	LIST[element.id].done = LIST[element.id].done ? false : true;
}

function removeTodo(element) {
	element.parentNode.parentNode.removeChild(element.parentNode);
	LIST[element.id].del = true;
}

function editTodo(element) {
	editing = true;
	currentEl = element;
	text = element.parentNode.querySelector('.text').textContent;
	inputVal.value = text;
	submitBtn.textContent = 'Save';

	console.log(LIST[element.id].name);
}

list.addEventListener('click', function (event) {
	let element = event.target;
	const elementJob = event.target.attributes.job.value;
	if (elementJob == 'complete') {
		completeTodo(element);
	} else if (elementJob == 'delete') {
		removeTodo(element);
	} else if (elementJob == 'edit') {
		editTodo(element);
	}
});
