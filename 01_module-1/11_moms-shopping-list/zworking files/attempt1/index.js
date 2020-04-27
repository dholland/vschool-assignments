// get elements
const inputVal = document.addItem.title;
const list = document.getElementById('list');
const submitBtn = document.getElementById('submitBtn');

class Todo {
	constructor(value) {
		this.value = inputVal.value;
		this.add = function () {
			const li = document.createElement('li');

			const div = document.createElement('div');
			div.textContent = this.value;
			div.setAttribute('id', 'todo');

			const createEditBtn = document.createElement('button');
			createEditBtn.textContent = 'edit';
			createEditBtn.setAttribute('id', 'editBtn');

			const createRmBtn = document.createElement('button');
			createRmBtn.textContent = 'X';
			createRmBtn.setAttribute('id', 'rmBtn');

			list.appendChild(li);
			li.appendChild(div);
			li.appendChild(createEditBtn);
			li.appendChild(createRmBtn);
		};
		this.eventListerns = function () {
			const removeBtn = document.getElementById('rmBtn');
			const li = document.getElementById('todo');
			removeBtn.addEventListener('click', function () {
				li.parentNode.remove(li);
			});

			const editBtn = document.getElementById('editBtn');
			const getVal = document.getElementById('todo');

			editBtn.addEventListener('click', function () {
				submitBtn.textContent = 'Save';
				inputVal.value = getVal.textContent;
				getVal.className.add('changing');
				console.log(getVal);
			});
			this.edit = function () {
				let changeVal = document.querySelector('.changing');
				changeVal.textContent = inputVal.value;
				submitBtn.textContent = 'submit';
				inputVal.value = '';
				parent.changeVal.className.remove('changing');
			};
		};
	}
}

submitBtn.addEventListener('click', function () {
	if (submitBtn.textContent == 'submit') {
		let todo = new Todo(inputVal.value);
		todo.add();
		todo.eventListerns();
		inputVal.value = '';
	}

	if (submitBtn.textContent == 'Save') {
		todo.edit();
	}

	//ADD SAVE VS SUBMIT OPTION
});
