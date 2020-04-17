var readlineSync = require('readline-sync'),
	chalk = require('chalk'),
	log4js = require('log4js'),
	logger,
	user,
	pw,
	command;

log4js.configure({ appenders: [{ type: 'file', filename: 'fooApp.log' }] });
logger = log4js.getLogger('fooApp');

readlineSync.setDefaultOptions({
	print: function (display, encoding) {
		logger.info(chalk.stripColor(display));
	}, // Remove ctrl-chars.
	prompt: chalk.red.bold('> '),
});

console.log(chalk.black.bold.bgYellow('    Your Account    '));
user = readlineSync.question(chalk.gray.underline(' USER NAME ') + ' : ');
pw = readlineSync.question(chalk.gray.underline(' PASSWORD  ') + ' : ', {
	hideEchoBack: true,
});
// Authorization ...
console.log(chalk.green('Welcome, ' + user + '!'));
command = readlineSync.prompt();

let bar = new ProgressBar('loading ..:bar', {
	total: 10,
	renderThrottle: 1000,
	width: 20,
});

function sleep(milliseconds) {
	const date = Date.now();
	let currentDate = null;

	var green = '\u001b[42m \u001b[0m';
	var red = '\u001b[41m \u001b[0m';

	let bar = new ProgressBar('  [:bar]', {
		complete: green,
		incomplete: red,
		total: 20,
	});

	let id = setInterval(function () {
		bar.tick();
		if (bar.complete) {
			clearInterval(id);
		}
	}, 100);

	do {
		currentDate = Date.now();
	} while (currentDate - date < milliseconds);
	{
		bar.tick(currentDate);
	}
}

function sleep(milliseconds) {
	const date = Date.now();
	let currentDate = null;

	do {
		currentDate = Date.now();
	} while (currentDate - date < milliseconds);
}
