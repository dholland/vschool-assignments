// var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const xhr = new XMLHttpRequest();

//two args "Method", "URL", "async"
xhr.open('GET', 'https://api.vschool.io/pokemon', true);
xhr.send();
//has our state come back and do we have a status of 200
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 200) {
		//can now handle the data that returns
		console.log(xhr.status, xhr.readyState);
		const data = JSON.parse(xhr.responseText);
		printObj(data.objects[0].pokemon);
	} else if (xhr.status !== 200) {
		console.log(xhr.status, xhr.readyState);
	}
};

function printObj(arr) {
	arr.slice(0, 50).forEach((pokemon) => {
		const wrapper = document.getElementById('wrapper');
		const btn = document.createElement('button');
		btn.textContent = pokemon.name;
		wrapper.appendChild(btn);
	});
}
