function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function wait(seconds) {
	const date = Date.now();
	let currentDate = null;

	do {
		currentDate = Date.now();
	} while (currentDate - date < seconds * 1000);
}

class Player {
	constructor(name, totalCoins, status) {
		this.name = name;
		this.totalCoins = totalCoins;
		this.status = status;
		this.hasStar = false;
		this.gameActive = true;
	}
	setName() {
		if (getRandomInt(1, 3) === 1) {
			this.name = 'Mario';
		} else {
			this.name = 'Luigi';
		}
		console.log(this.name);
	}
	gotHit() {
		if (this.status === '🥬') {
			this.status = '🍄';
			this.hasStar = false;
		} else if (this.status === '🍄') {
			this.status = '⬇️';
		} else if (this.status === '⬇️') {
			this.gameActive = false;
			console.log('⚰️');
		}
	}
	gotPowerup() {
		if (this.status === '🥬') {
			this.hasStar = true;
		} else if (this.status === '🍄') {
			this.status = '🥬';
		} else if (this.status === '⬇️') {
			this.status = '🍄';
		}
	}
	addCoin() {
		this.totalCoins = this.totalCoins + 1;
		// console.log(this.totalCoins);
	}
	print() {
		console.log(
			`Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}\n`
		);
		if (this.hasStar === true) {
			console.log('You have a star!');
		}
	}
	roll(num) {
		if (num === 0) {
			this.gotHit();
			this.print();
		} else if (num === 1) {
			this.gotPowerup();
			this.print();
		} else {
			this.addCoin();
			this.print();
		}
	}
}

const playGame = new Player('', 0, '🥬');

playGame.setName();
// playGame.print();

while (playGame.gameActive) {
	chance = getRandomInt(0, 3);
	playGame.roll(chance);
	wait(1);
}

let intervalId;

// setInterval(playGame.roll, 1000);
// clearInterval(intervalId);
