//messages array
let messages = [
	{
		id: 1,
		msg: 'How are you today?',
		side: 'message left',
	},
	{ id: 2, msg: 'Great! How are you?', side: 'message right' },
	{
		id: 3,
		msg: 'Doing pretty good. The weather is awesome today!',
		side: 'message left',
	},
	{
		id: 4,
		msg: 'Doing pretty good. The weather is awesome today!',
		side: 'message right',
	},
];

//get Header Div and add text and author information
const header = document.getElementById('header');
const yourName = 'Danny Holland';

header.innerHTML +=
	"<div class='header'><h1> JavaScript Made This!!</h1>" +
	"<p><span class='name'>" +
	yourName +
	'</span> <strong>wrote the JavaScript</strong></p></div>';

//Get Message Div's and replace with message array
const msgList = document.querySelectorAll('#message-list > div');

const msgListClear = document.querySelector('#message-list');

for (var i = 0; i < msgList.length; i++) {
	msgList[i].innerHTML = messages[i].msg;
}

// console.log('MESSAGE LIST', msgList);

//Select Clear Button
let clearBtn = document.getElementById('clear-button');

console.log(clearBtn);

clearBtn.addEventListener('click', handleClear);

function handleClear() {
	msgListClear.innerHTML = '<div></div>';
}

//Change Theme

const dropDown = document.getElementById('theme-drop-down');

dropDown.addEventListener('change', getTheme);

function getTheme(v) {
	let val = dropDown.value;
	let colorRight = document.querySelectorAll('.right');
	let colorLeft = document.querySelectorAll('.left');

	if (val == 'theme-one') {
		for (i = 0; i < colorRight.length; i++) {
			colorRight[i].style.backgroundColor = '#5AE95A';
		}
		for (i = 0; i < colorLeft.length; i++) {
			colorLeft[i].style.backgroundColor = '#ACD2EC';
			colorLeft[i].style.color = 'black';
		}
	}
	if (val == 'theme-two') {
		for (i = 0; i < colorRight.length; i++) {
			colorRight[i].style.backgroundColor = 'red';
		}
		for (i = 0; i < colorLeft.length; i++) {
			colorLeft[i].style.backgroundColor = 'black';
			colorLeft[i].style.color = 'white';
		}
	}
	if (val == 'theme-default') {
		for (i = 0; i < colorRight.length; i++) {
			colorRight[i].style.backgroundColor = 'lightblue';
		}
		for (i = 0; i < colorLeft.length; i++) {
			colorLeft[i].style.backgroundColor = 'burlywood';
			colorLeft[i].style.color = 'black';
		}
	}
}

//get input value
const inputVal = document.getElementById('input').value;
console.log(inputVal);

// select send message button
const sendBtn = document.getElementById('sendBtn');
sendBtn.addEventListener('click', addMessage);

let currentSide = '';

function addMessage() {
	//get inputvalue
	let inputVal = document.getElementById('input').value;
	//get message list for appending new div to
	let msgList = document.getElementById('message-list');
	//create new div assign it to newMsg variable
	let newMsg = document.createElement('div');
	//set input value to the text of the new div
	newMsg.textContent = inputVal;
	switchSides(newMsg);
	//append the new div to the message node
	msgList.appendChild(newMsg);
	getTheme();
	document.getElementById('input').value = '';
	// return currentSide;
}
function switchSides(newMsg) {
	console.log(currentSide);
	if (currentSide == 'left') {
		//set class items for new div message
		newMsg.classList.add('message', 'right');
		currentSide = 'right';
		console.log(currentSide);
	} else {
		newMsg.classList.add('message', 'left');
		console.log(currentSide);
		currentSide = 'left';
	}
}
