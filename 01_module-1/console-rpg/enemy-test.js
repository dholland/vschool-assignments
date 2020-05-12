const randomInt = require('./utils/randomInt');
const wait = require('./utils/wait');
function enemyFound() {
	const chance = randomInt(1, 6);
	if (chance === 1) {
		return true;
	} else return false;
}

// console.log(enemyFound());

// if (enemyFound) {
// 	enemySequence();
// }
const winner = Math.floor(Math.random() * 2);
const winner2 = Math.floor(Math.random() * 2);
const winner1 = Math.floor(Math.random() * 2);

// console.log(winner, winner1, winner2);
// let on = true;
// let health = 5;
// let arr = [1, 2, 3, 4];
// let counter = 0;

// function playGame() {
// 	if (health === 0) {
// 		return false;
// 	} else if (arr.length === 0) {
// 		return false;
// 	} else return true;
// }

// function changeHealth() {
// 	if (counter === 3) health = 0;
// }

// console.log('true question', playGame);

// while (playGame() == true) {
// 	console.log('Playing Game');
// 	counter++;
// 	console.log(arr);
// 	wait(1);
// 	arr.pop();
// 	changeHealth();
// }
// console.log('exit');
