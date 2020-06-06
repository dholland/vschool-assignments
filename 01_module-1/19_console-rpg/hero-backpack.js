class Character {
	constructor(name, health, runCount, attackPower, backpack) {
		this.name = name;
		this.health = health;
		this.runCount = runCount;
		this.attackPower = attackPower;
		this.backpack = [{ item: 'shield', cost: 100 }];
	}
}

playerName = 'Danny';

hero = new Character(playerName, 100, 0, 25);

console.log(hero);

hero.backpack.push({ item: 'sword' });

// hero.backpack.push({ name: 'ax' });

for (let i = 0; i < hero.backpack.length; i++) {
	console.log(hero.backpack[i].item);
}
