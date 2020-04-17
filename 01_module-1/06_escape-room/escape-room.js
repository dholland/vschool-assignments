//Assignment https://coursework.vschool.io/escape-room/

const readline = require('readline-sync');
//Colorize Text
const chalk = require('chalk');
//Clear Console
const clear = require('clear');
//Make Cool ASCI text
const figlet = require('figlet');
//make spinners to delay input
const sleep = require('./sleep');

clear();

console.log(
	chalk.yellow(figlet.textSync('Escape Room', { horizontalLayout: 'full' }))
);

let begin = readline.question('Would You Like to Begin? ', {
	trueValue: ['yes', 'yeah', 'yep', 'y'],
	falseValue: ['no', 'nah', 'nope', 'n'],
});

let gameLoop;

if (begin == true) {
	gameLoop = setInterval(startGame, 1000);
}

function startGame() {
	console.log(chalk.white.bold.bgGreen('    Level 1    '));

	const name = readline.question(chalk.red.bold.bgBlack('Please enter name: '));

	sleep(1200);

	console.log('Bad news ' + name + '!', '\n');

	sleep(2000);

	console.log('You are suck deep inside a cave with only one way out.', '\n');

	sleep(2000);

	console.log('Find the magic pick ax and break free.', '\n');

	sleep(2000);

	console.log('The pick ax is hidden in one of three holes.', '\n');
	sleep(3000);

	console.log(
		'If your are unlucky you will stick your hand into the hole and be vicously bitten by a pit viper whos venom will surely kill you.',
		'\n'
	);

	sleep(3000);

	console.log('Good Luck');
	sleep(1200);
	const holes = [
			'Small Hole on the right?',
			'Large hole way up high?',
			'Medium hole at eye level?',
		],
		index = readline.keyInSelect(
			holes,
			'Which Hole would you like to stick your hand in?'
		);

	if (holes[index] == 'Small Hole on the right?') {
		sleep(1200);
		console.log('You found the Magic Pic Ax 🪓');

		sleep(1200);
		console.log(
			'Quickly you hack at the wall and start to see a light at the end of the tunnel! 🌅'
		);
		clearInterval(gameLoop);
		return;
	} else {
		sleep(1200);
		console.log('You have been bitten by a pit viper and die a slow death. 💀');
		sleep(1200);
		console.log('Game Over');
		clearInterval(gameLoop);
		return;
	}
}
