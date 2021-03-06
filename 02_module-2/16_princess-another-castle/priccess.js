const readlineSync = require('readline-sync');

const names = ['Mario', 'Lugi', 'Danny'];

const name = readlineSync.keyInSelect(names);

function setName(num) {
	if (num === 0) {
		console.log(names[0]);
	}
	if (num === 1) {
		console.log(names[1]);
	}
	if (num === 2) {
		console.log(names[2]);
	}
	if (num === 3) {
		console.log('End Game');
	}
}

setName(name);
