const inputVal = document.todos.todo;
const btn = document.todos.btn;
const todoList = document.getElementById('todoList');
let item = '';
btn.addEventListener('click', createTodos);

function createTodos() {
	createTodoItem();
	inputVal.value = '';
}

function createTodoItem() {
	//Create new li element
	let li = document.createElement('li');

	//Create input checkbox and set various attributes
	let checkBox = document.createElement('input');
	checkBox.setAttribute('type', 'checkbox');
	checkBox.setAttribute('id', 'item');
	checkBox.classList.add('css-checkbox');

	//append checkbox to the li
	li.appendChild(checkBox);

	//create label element
	let label = document.createElement('label');

	//set label to input value of input box
	label.textContent = inputVal.value;
	label.classList.add('css-label');
	label.setAttribute('for', 'item');

	let editBtn = document.createElement('div');

	//set label to input value of input box
	editBtn.textContent = 'Edit';
	editBtn.classList.add('edit--btn');
	editBtn.setAttribute('id', 'editBtn');

	//append label to li add class to label
	li.appendChild(label);
	li.classList.add('todo--item');

	li.append(editBtn);

	//append label to the todoList ul
	todoList.append(li);

	removeBtn = document.getElementById('item');
	//add event listern to the li element
	removeBtn.addEventListener('click', function () {
		li.remove(li);
	});

	const newVal = inputVal.value;
	editBtn.addEventListener('click', function () {
		// let text = newVal;
		// newVal = inputVal.value;
		console.log(newVal);
	});
}
