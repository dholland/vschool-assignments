const green = '\u001b[42m \u001b[0m';
const red = '\u001b[41m \u001b[0m';

const ProgressBar = require('progress');

module.exports = function (milliseconds) {
	const bar = new ProgressBar('  LOADING: [:bar]', {
		complete: green,
		incomplete: red,
		total: 20,
	});

	const id = setInterval(function () {
		bar.tick();
		if (bar.complete) {
			clearInterval(id);
		}
	}, milliseconds);
};
