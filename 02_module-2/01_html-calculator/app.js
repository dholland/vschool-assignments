// You will have one section (<div>) for each math operation (so 3 sections) total
// Each section has two inputs to take the first and second numbers
// Each section will have a button to perform the operation
// You will inject the result into the HTML (not an alert)
// Your website will have 3 colors
// Your website will have proper padding/spacing to lay things out nicely

const form = document.getElementById('calc');
const num1 = form.num1;
const num2 = form.num2;
const num3 = form.num3;
const num4 = form.num4;
const num5 = form.num5;
const num6 = form.num6;
const result = document.getElementById('result');
const h2 = document.createElement('h2');

form.addEventListener('submit', handleForm);

function handleForm(ev) {
	ev.preventDefault();
	if (ev.submitter.id === 'add') {
		result.innerText = +num1.value + +num2.value;
		num1.value = '';
		num2.value = '';
	} else if (ev.submitter.id === 'subtract') {
		result.innerText = +num3.value - +num4.value;
		num3.value = '';
		num4.value = '';
	} else if (ev.submitter.id === 'multiply') {
		result.innerText = +num5.value * +num6.value;
		num5.value = '';
		num6.value = '';
	}
}

// const operator = ['Add', 'Subtract', 'Multiply', 'Divide'],
// 	index = readline.keyInSelect(operator, 'Which Operation?');

// console.log('Ok, I will ' + operator[index] + 'your two numbers');

// //run function based on operator[index] match

// if (operator[index] == 'Add') {
// 	add();
// } else if (operator[index] == 'Subtract') {
// 	sub();
// } else if (operator[index] == 'Multiply') {
// 	mul();
// } else div();

// //Operation functions

// function add() {
// 	let result = num1 + num2;
// 	console.log(result);
// }
// function sub() {
// 	let result = num1 - num2;
// 	console.log(result);
// }

// function mul() {
// 	let result = num1 * num2;
// 	console.log(result);
// }

// function div() {
// 	let result = num1 / num2;
// 	console.log(result);
// }
