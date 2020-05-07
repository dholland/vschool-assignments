const readline = require('readline-sync');
//Colorize Text
const chalk = require('chalk');
//Clear Console
const clear = require('clear');
//Make Cool ASCI text
const figlet = require('figlet');

const wait = require('./wait');

clear();

// Console must greet player with a fun message

// Console must ask for the player's name and store it
let begin = readline.question('Would You Like to Begin? ', {
	trueValue: ['yes', 'yeah', 'yep', 'y'],
	falseValue: ['no', 'nah', 'nope', 'n'],
});
clear();

if (begin == true) {
	gameLoop = setInterval(startGame, 1000);
}

// Walking:
// The console will ask the user to enter a "w" to walk
// Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)

//Constructor Character
function Character(name, health, weapon, runCount) {
	this.name = name;
	this.health = health;
	this.weapon = weapon;
	this.runCount = runCount;
}

Character.prototype.walk = function () {
	const willFight = readline.question(
		'(f) for fighting, (r) to run away, (i) to check inventory \n'
	);
	if (willFight === 'f') {
		this.fight();
	} else if (willFight === 'r') {
		this.run();
	} else if (willFight === 'i') {
		this.checkInventroy();
	} else {
		this.walk();
	}
};

Character.prototype.fight = function () {
	// const winner = selectWinner();
	// if (winner === 'hero') {
	this.health = this.health - 10;
	console.log(` ${this.name} has ${this.health} health remaining \n`);
	this.walk();
	// }
};

Character.prototype.checkInventroy = function () {
	console.log(`${this.name} has a ${this.weapon} \n`);
	this.walk();
	// const winner = selectWinner()
	// if(winner === "hero"){
	// }
};

Character.prototype.run = function () {
	console.log(`${this.name} has a run ${this.runCount} \n`);
	this.runCount++;
	this.walk();
	// const winner = selectWinner()
	// if(winner === "hero"){
	// }
};

function gameOver() {
	console.log('GAME OVER');
	clear();
}

function startGame() {
	console.log(chalk.red(figlet.textSync('RPG', { horizontalLayout: 'full' })));

	const playerName = readline.question(
		chalk.red.bold.bgBlack('Please enter name: ')
	);

	const hero = new Character(playerName, 100, 'knife', 0);

	console.log(hero);

	// wait(1000);
	console.log(`Welcome ${playerName} enjoy the game`);

	// wait(1000);

	console.log(
		chalk.blue(
			figlet.textSync('Lets Begin', {
				horizontalLayout: 'default',
				font: '3D-ASCII',
			})
		)
	);
	hero.walk();
}
