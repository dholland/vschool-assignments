// Blue when the mouse hovers over the square
// Red when the mouse button is held down over the square
// Yellow when the mouse button is let go over the square
// Green when the mouse is double clicked in the square
// Orange when the mouse scroll is used somewhere in the window (not just over the square).

const beatPad = document.getElementById('beatPad');
console.log(beatPad);

beatPad.addEventListener('mousedown', handleMouse);
beatPad.addEventListener('mouseover', handleMouse);
beatPad.addEventListener('mouseup', handleMouse);
document.addEventListener('wheel', handleEvent);
beatPad.addEventListener('dblclick', handleEvent);

function handleMouse(e) {
	if (e.type == 'mouseover') {
		beatPad.style.backgroundColor = 'blue';
	}

	if (e.type == 'mousedown') {
		beatPad.style.backgroundColor = 'red';
	}
	if (e.type == 'mouseup') {
		beatPad.style.backgroundColor = 'yellow';
	}
}

function handleEvent(e) {
	if (e.type == 'dblclick') {
		beatPad.style.backgroundColor = 'green';
	}
	if (e.type == 'wheel') {
		beatPad.style.backgroundColor = 'orange';
	}
}
