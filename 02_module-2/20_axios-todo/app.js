// delclare elements
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const submitBtn = document.getElementById('submitBtn');

//load todos upon page load
window.addEventListener('load', () => getToDos());

//Event Listeners
todoForm.addEventListener('click', handleClick);
todoList.addEventListener('click', handleClick);

function handleClick(e) {
	e.preventDefault();

	//figure out what is being clicked
	// console.dir(e.target.parentNode.attributes[2].value);

	if (e.target === submitBtn) {
		addToDo();
	} else if (e.target.classList.value === 'remove') {
		const id = e.target.parentNode.getAttribute('data-id');
		deleteToDo(id);
	} else if (e.target.classList.value === 'checkbox') {
		const id = e.target.parentNode.getAttribute('data-id');
		const completedVal = e.target.parentNode.attributes[2].value;
		if (completedVal === 'false') {
			completeTodo(id, 'true');
		} else {
			completeTodo(id, 'false');
		}
	}
}

function addToDo(e) {
	const newTodo = {
		title: todoForm.title.value,
		description: todoForm.description.value,
		imgUrl: todoForm.img.value,
	};
	axios
		.post(`https://api.vschool.io/dholland/todo`, newTodo)
		.then((res) => {
			console.log(res);
			const li = document.createElement('li');
			// const check = document.createElement('input')
			// check.type = 'checkbox'

			// if(res.completed){
			// 	li.style.color = 'white'

			// }

			// check.addEventListener('click', function(){
			// 	li.style.color = 'white'
			// })
			//const img = document.createElement('img')
			//img.src = ${res.data.imgUrl}
			li.className = 'todo-item';
			li.setAttribute('data-id', res.data._id);
			li.setAttribute('data-complete', res.data.completed);
			li.innerHTML = `<span class="checkbox">&#9744;</span>
			${res.data.title}
			${res.data.imgUrl ? `<img src="${res.data.imgUrl}>` : ``}	
			<span class="remove">&#10006</span>			
			`;
			todoList.appendChild(li);
		})
		.catch((err) => console.log(err));
	todoForm.reset();
}

function getToDos() {
	todoList.innerHTML = '';
	axios
		.get(`https://api.vschool.io/dholland/todo`)
		.then((res) => {
			res.data.forEach((item) => {
				const li = document.createElement('li');
				li.className = 'todo-item';
				li.setAttribute('data-id', item._id);
				li.setAttribute('data-complete', item.completed);
				li.innerHTML = `<span class="checkbox">${
					!item.completed ? `&#9744` : `&#10003`
				};</span>
				${item.title}
					

				<span class="remove">&#10006</span>
				`;
				todoList.appendChild(li);
			});
		})
		.catch((err) => console.log(err));
}

function deleteToDo(id) {
	axios
		.delete(`https://api.vschool.io/dholland/todo/${id}`)
		.then((response) => {
			getToDos();
		})
		.catch((error) => console.log(error));
}

function completeTodo(id, updateVal) {
	const updates = {
		completed: updateVal,
	};

	axios
		.put(`https://api.vschool.io/dholland/todo/${id}`, updates)
		.then((response) => {
			getToDos();
		})
		.catch((error) => console.log(error));
}

// `<li class="todo-item">
// <i>circle</i>
// <span>Todo Text</span>
// </li>`

//check mark
{
	/* <span>&#10003;</span>	 */
}
// ${item.imgUrl ? `<img alt="${item.description}" src="${item.imgUrl}` : ``}
