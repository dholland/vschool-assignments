// get page elements
const inputVal = document.getElementById('title');
const list = document.getElementById('list');
const submitBtn = document.getElementById('submitBtn');

//set editing state
let editing = false;

//set vars for class names to be added when todo is completed
const completed = 'fa-check-circle';
const notComplete = 'fa-circle-thin';
const strikeout = 'lineThrough';

//arr for todo items
let LIST = [];

//incromentor for id's of each todo
let id = 0;

//var to pass current element when editing todo
let currentEl = '';

//add todo function with params
function addTodo(toDo, id, done, del) {
	if (del) {
		return;
	}
	//set css class based on following logic
	const isDone = done ? completed : notComplete;
	const line = done ? strikeout : '';

	// template literal used when creating a todo.
	// gets class and id from global vars
	const text = `
			<li class='item'>
				<i class="fa ${isDone} co" id="${id}" job='complete'></i>
				<div class="text ${line}">${toDo}</div>
				<i class="fa fa-edit edit" job='edit' id="${id}"></i>
				<i class="fa fa-trash de" job='delete' id="${id}"></i>
			</li>
		`;
	// sets position of the html when inserted
	const position = 'beforeend';

	//adds html to li element selected above
	list.insertAdjacentHTML(position, text);
}

// sets new val based on what is in the input value
//sets the old value of the todo to the new value
//changes the array value based on the id it gets from the element
function updateTodo() {
	newVal = inputVal.value;
	console.log(currentEl.id);
	currentEl.parentNode.querySelector('.text').textContent = newVal;
	LIST[currentEl.id].name = newVal;

	//change state of editing for button logic and clears input value upon enter
	editing = false;
	submitBtn.textContent = 'Add ToDo';
	inputVal.value = '';
}
//uses enter key and click of event listern, passes event value and currentEl
function toDoAdded(e, currentEl) {
	if (!editing) {
		if (e.keyCode == 13 || e.type == 'click') {
			const toDo = inputVal.value;
			//doesn't submit if empty
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
		//submits if editing a value passes current element
		if (e.keyCode == 13 || e.type == 'click') {
			updateTodo(currentEl);
		}
	}
}

//event listerns
document.addEventListener('keyup', toDoAdded);
submitBtn.addEventListener('click', toDoAdded);

// when complete button is clicked toggle classes + change job value
function completeTodo(element) {
	element.classList.toggle(completed);
	element.classList.toggle(notComplete);
	element.parentNode.querySelector('.text').classList.toggle('lineThrough');
	LIST[element.id].done = LIST[element.id].done ? false : true;
}

function removeTodo(element) {
	//gets the element and then traverses higher to remove that element
	element.parentNode.parentNode.removeChild(element.parentNode);
	LIST[element.id].del = true;
}

function editTodo(element) {
	console.log(element.parentNode);
	editing = true;
	currentEl = element;
	text = element.parentNode.querySelector('.text').textContent;
	inputVal.value = text;
	submitBtn.textContent = 'Save';

	console.log(LIST[element.id].name);
}

// adds event listern to the whole LI then grabs each element based on what is clicked. This allows for one event listern to cover, complete, edit and delete
list.addEventListener('click', function (event) {
	let element = event.target;
	console.log(element);
	const elementJob = event.target.attributes.job.value;
	if (elementJob == 'complete') {
		completeTodo(element);
	} else if (elementJob == 'delete') {
		removeTodo(element);
	} else if (elementJob == 'edit') {
		editTodo(element);
	}
});
