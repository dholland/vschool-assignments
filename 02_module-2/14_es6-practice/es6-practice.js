// var name = 'John';
// var age = 101;

// function runForLoop(pets) {
// 	let petObjects = [];
// 	for (let i = 0; i < pets.length; i++) {
// 		let pet = { type: pets[i] };
// 		let name;
// 		if (pets[i] === 'cat') {
// 			name = 'fluffy';
// 		} else {
// 			name = 'spot';
// 		}
// 		console.log('pet name: ', name);
// 		pet.name = name;
// 		petObjects.push(pet);
// 	}
// 	console.log('man name: ', name);
// 	return petObjects;
// }

// runForLoop(['cat', 'dog']);

// const carrots = ['bright orange', 'ripe', 'rotten'];

// function mapVegetables(arr) {
// 	return arr.map((carrot) => {
// 		return { type: 'carrot', name: carrot };
// 	});
// }
// console.log(mapVegetables(carrots));

const people = [
	{
		name: 'Princess Peach',
		friendly: false,
	},
	{
		name: 'Luigi',
		friendly: true,
	},
	{
		name: 'Mario',
		friendly: true,
	},
	{
		name: 'Bowser',
		friendly: false,
	},
];

const twoNewPeople = [
	{
		name: 'Danny',
		friendly: true,
	},
	{
		name: 'Joker',
		friendly: true,
	},
];

// const newPeopleArray = [...people, ...twoNewPeople];

// console.log(newPeopleArray);

// function filterForFriendly(arr) {
// 	return arr.filter((person) => person.friendly);
// }
// console.log(filterForFriendly(people));

// const peopleArray = ['Princess Peach', 'Luigi', 'Mario', 'Bowser'];

// const people = [
// 	{
// 		name: 'Princess Peach',
// 		friendly: false,
// 	},
// 	{
// 		name: 'Luigi',
// 		friendly: true,
// 	},
// 	{
// 		name: 'Mario',
// 		friendly: true,
// 	},
// 	{
// 		name: 'Bowser',
// 		friendly: false,
// 	},
// ];

const person = {
	name: 'Bowser',
	friendly: false,
	color: 'red',
	age: 50,
	friends: ['Danny', 'Mario'],
};

const { name, age, friendly, color, friends } = person;

// console.log(
// 	`${person.name} is ${age} and his favorite color is ${color} and his best friends is ${friends[0]} `
// );

const route = 'asdfasdf';

const url = `google.com/${route}`;

console.log(url);
