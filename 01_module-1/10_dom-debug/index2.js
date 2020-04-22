const colors = [
	{ name: 'Retro Green', value: '#7ebdb4' },
	{ name: 'Desert Sky', value: '#f6d198' },
	{ name: 'Retro Rust', value: '#f4a548' },
];

document.getElementById('add').addEventListener('click', function (e) {
	console.log('clicked');
	const subItem = createSubItem(e);
	document.getElementById('list').appendChild(subItem);
});

function createDropDown() {
	const dropDown = document.createElement('select');
	for (let i = 0; i < colors.length; i++) {
		const option = document.createElement('option');
		option.innerHTML = colors[i].name;
		option.value = colors[i].value;
		dropDown.append(option);
	}
	dropDown.addEventListener('change', function (e) {
		// console.log(e.target.style);
		e.target.parentNode.style.backgroundColor = e.target.value;
		// e.target.parent.style.backgroundColor = e.target.value;
	});
	return dropDown;
}

function createSubItem(e) {
	const subItem = document.createElement('div');
	let subItemValue = document.getElementById('input').value;
	subItem.textContent = subItemValue + ' ';
	const dropDown = createDropDown();
	subItem.appendChild(dropDown);
	subItem.setAttribute('class', 'subItem');
	return subItem;
}
