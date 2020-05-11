const readline = require('readline-sync');
const chalk = require('chalk');
const clear = require('clear');
const wait = require('./utils/wait');
const randomInt = require('./utils/randomInt');

// const begin = readline.question('Would You Like to Begin? ', {
// 	trueValue: ['yes', 'yeah', 'yep', 'y'],
// 	falseValue: ['no', 'nah', 'nope', 'n'],
// });

const playerName = readline.question('What is your Name? ');

let distanceTraveled = 0;
let fights = 0;
let enemiesKilled = 0;

// console.log(randomInt(1, 3));

const enemies = [
	{ id: 0, type: 'Bridge Troll', weapon: 'fist', power: 15 },
	{ id: 1, type: 'Goblin', weapon: 'Battle Ax', power: 15 },
	{ id: 2, type: 'White Walker', weapon: 'Sword', power: 50 },
	{ id: 3, type: 'Spider', weapon: 'Bow', power: 30 },
];

class Character {
	constructor(name, health, attackPower, item) {
		this.name = name;
		this.health = health;
		this.attackPower = attackPower;
		this.backpack = [item];
		this.runCount = 0;
	}
}

hero = new Character(playerName, 100, 25, 'brass nuckles');

//TODO: Add enimies

// for (let i = 0; i < array.length; i++) {
// 	const element = array[i];
// }

troll = new Character('Troll', 5, 25, 'club');

console.log(troll.backpack);

function enemyFound() {
	const chance = randomInt(1, 3);
	if (chance === 1) {
		return true;
	} else return false;
}

function walk() {
	if (enemyFound()) {
		enemySequence(troll);
	}
	wait(1);
	console.log(
		chalk.blue(
			`You have travled ${distanceTraveled} miles and had ${fights} fights`
		)
	);
	distanceTraveled++;
}

//TODO: Add Random Hit Value
//TODO: Add drop item
//

function fight(enemy) {
	const winner = Math.floor(Math.random() * 2);

	wait(1);

	if (winner === 0) {
		enemy.health = enemy.health - hero.attackPower;

		if (hero.runCount > 1) {
			hero.runCount--;
		}
		console.log('Run Count', hero.runCount);

		console.log(chalk.green(`${hero.name} Won the Fight`));
		wait(1);
		console.log(`The Troll now has ${troll.health} health`);
		wait(1);
	} else if (winner === 1) {
		hero.health = hero.health - enemy.attackPower;
		wait(1);
		console.log(chalk.red(`${enemy.name} Won the Fight`));
		console.log(`${hero.name} now has ${hero.health} health`);
		wait(1);
	}

	if (enemy.health <= 0) {
		console.log(`You have slane the ${enemy.name}`);
		console.log(`the ${enemy.name} has dropped their ${enemy.backpack[0]}`);

		hero.backpack.push(enemy.backpack[0]);
		console.log(hero.backpack);
		enemiesKilled++;
	}
	if (hero.health < 5) {
		console.log(
			chalk.red(
				`${hero.name} your health is ${hero.health} you better get out of here`
			)
		);
	}

	fights++;
	walk();
	//when enemy dies return item
	//itemDropped(item)
}
function checkInventory() {
	console.log(`${hero.name} has inventory of items ${hero.backpack}`);
}

//TODO: Add random attack %

function run(enemy) {
	if (hero.runCount > 5) {
		console.log(
			chalk.yellow(
				`You are to tired to run, try fighting the ${enemy.name} to get some strenght back`
			)
		);
		const readyFight = readline.question(
			chalk.green('you ready to fight?: (y) fight or (d) to die \n')
		);
		if (readyFight === 'f') {
			fight(enemy);
		} else {
			killHero(enemy);
		}
	}
	hero.runCount++;
}

function status() {
	console.log(
		`${hero.name} you have ${hero.health} and are equipt with the following items`
	);
	console.log(hero.backpack);
}

function killHero(enemy) {
	if ((enemy.health > 0) & (hero.health < 0)) {
		console.log(`You were killed by ${enemy.name}`);
	}
	hero.health = 0;
}

function enemySequence(enemy) {
	console.log(chalk.red(`A ${enemy.name} is in the path`));
	const playerMove = readline.question(
		'would you like to: (f) for fighting, (r) to run away, (i) to check inventory, (d) to die \n'
	);

	if (playerMove === 'f') {
		fight(enemy);
	} else if (playerMove === 'r') {
		run(enemy);
	} else if (playerMove === 'i') {
		checkInventory();
	} else if (playerMove == 'd') {
		killHero();
	}
}

//

function playGame() {
	if (hero.health === 0) {
		return false;
	} else if (enemies.length === 0) {
		return false;
	} else return true;
}

while (playGame() == true) {
	walk();
}

console.log('Game Over');
console.log(`You Traveled ${distanceTraveled}`);
