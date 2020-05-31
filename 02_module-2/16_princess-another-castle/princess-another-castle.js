function Player() {
	this.name = 'Name';
}

class Player {
	constructor(name, totalCoins, status, hasStar) {
		this.name = name;
		this.totalCoins = totalCoins;
		this.status = ['Power up', 'Big', 'Small', 'Dead'];
		this.hasStar = false;
		this.setName = setName(name);
	}
}
