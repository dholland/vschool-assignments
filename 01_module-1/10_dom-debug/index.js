const colors = ['#7ebdb4', '#f6d198', '#862a5c'];

document.getElementById('add').addEventListener('click', function (e) {
	console.log('clicked');
	const subItem = createSubItem(e);
	document.getElementById('list').appendChild(subItem);
});

function createDropDown() {
	const dropDown = document.createElement('select');
	for (let i = 0; i < colors.length; i++) {
		const option = document.createElement('option');
		option.innerHTML = colors[i];
		option.value = colors[i];
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
