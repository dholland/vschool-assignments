const enemies = [
	{ id: 0, type: 'troll', weapon: 'fist', power: 15 },
	{ id: 1, type: 'troll', weapon: 'Battle Ax', power: 15 },
	{ id: 2, type: 'troll', weapon: 'Sword', power: 50 },
	{ id: 3, type: 'troll', weapon: 'Bow', power: 30 },
];

//Initailize array of objects.
function lowerHealth(arr) {
	const item = pickEnemy(arr);
	objIndex = arr.findIndex((obj) => obj.id == item);
	console.log(item);
	console.log(objIndex);
	arr[objIndex].power = arr[objIndex].power - 10;
}

function pickEnemy(arr) {
	const randomNumber = Math.floor(Math.random() * arr.length);
	return randomNumber;
}
lowerHealth(enemies);
console.log('Arr after', enemies);

var obj = {
	address: { id: 2, type: { id: 1, label: 'Test1' } },
	id: 1,
	name: 'test',
};

function set(obj, selector, value) {
	selector = selector.split('.');
	selector.slice(0, -1).reduce((obj, s) => {
		return obj[s];
	}, obj)[selector.pop()] = value;
}

// set(obj, 'name', 'Test2');

/////////
function replaceObject(obj, newObj) {
	Object.keys(obj).forEach(function (k) {
		delete obj[k];
	});
	Object.keys(newObj).forEach(function (k) {
		obj[k] = newObj[k];
	});
}

replaceObject(obj.name, { name: 'bar' });

console.log(obj);

/////////
//Find index of specific object using findIndex method.

//Log object to Console.
// console.log('Before update: ', enemies[objIndex]);

//Update object's name property.

//Log object to console again.
// console.log('After update: ', enemies[objIndex]);

var randomProperty = function (obj) {
	var keys = Object.keys(obj);
	return obj[keys[(keys.length * Math.random()) << 0]];
};

// console.log(pickEnemy(enemies));

// console.log(random);
// console.log(Math.ceil(random));
// console.log(Math.floor(random));
// console.log(Math.round(random));
// console.log(+random.toFixed(2));

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// console.log(getRandomInt(1, 20));
