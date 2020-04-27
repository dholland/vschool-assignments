// get elements
const inputVal = document.addItem.title;
const list = document.getElementById('list');
const submitBtn = document.getElementById('submitBtn');
const changeVal = document.querySelector('.changing');

function addTodo(toDo) {
	const text = `<li>
			<div>${toDo}</div>
			<button>edit</button>
			<button>X</button>
		</li>`;

	const position = 'beforeend';

	list.insertAdjacentHTML(position, text);
	// const li = document.createElement('li');
	// li.setAttribute('id', 'todo');

	// const div = document.createElement('div');
	// div.textContent = inputVal.value;

	// const createEditBtn = document.createElement('button');
	// createEditBtn.textContent = 'edit';
	// createEditBtn.setAttribute('id', 'editBtn');

	// const createRmBtn = document.createElement('button');
	// createRmBtn.textContent = 'X';
	// createRmBtn.setAttribute('id', 'rmBtn');

	// list.appendChild(li);
	// li.appendChild(div);
	// li.appendChild(createEditBtn);
	// li.appendChild(createRmBtn);
}

function toDoAdded(e) {
	if (e.keyCode == 13) {
		e.preventDefault();
	}

	console.log(event.type);
	// if (e.keyCode == 13) {
	// 	const toDo = inputVal.value;
	// 	if (toDo) {
	// 		addTodo(toDo);
	// 	}
	// }
	// if (e.value == 'click') {
	// 	const toDo = inputVal.value;
	// 	if (toDo) {
	// 		addTodo(toDo);
	// 	}
	// }
}

document.addEventListener('keyup', toDoAdded);

submitBtn.addEventListener('click', toDoAdded);

// submitBtn.addEventListener('click', function () {
// 	if (submitBtn.textContent == 'submit') {
// 		addTodo(inputVal.value);
// 		eventListerns(addTodo);
// 		inputVal.value = '';
// 	}

// 	if (submitBtn.textContent == 'Save') {
// 		editTodo();
// 	}
// });

// function eventListerns() {
// 	const removeBtn = document.getElementById('rmBtn');
// 	const todoItem = document.getElementById('todo');

// 	removeBtn.addEventListener('click', function () {
// 		todoItem.remove(todoItem);
// 	});

// 	const editBtn = document.getElementById('editBtn');
// 	const getVal = todoItem.getElementsByTagName('div');

// 	editBtn.addEventListener('click', function () {
// 		submitBtn.textContent = 'Save';
// 		inputVal.value = getVal.textContent;
// 		getVal.className.add('changing');
// 	});
// }

// function editTodo() {
// 	let changeVal = document.querySelector('.changing');
// 	changeVal.textContent = inputVal.value;
// 	submitBtn.textContent = 'submit';
// 	inputVal.value = '';
// 	changeVal.className.remove('changing');
// }
