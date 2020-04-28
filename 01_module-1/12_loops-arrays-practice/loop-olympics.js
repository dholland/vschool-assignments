// [x] Write a for loop that prints to the console the numbers 0 through 9.
// [x]Write a for loop that prints to the console 9 through 0.
// Write a for loop that prints these fruits to the console.

// var fruit = ['banana', 'orange', 'apple', 'kiwi'];

// for (let i = 0; i < fruit.length; i++) {
// 	console.log(fruit[i]);
// }

//Bronze Medal
// [x]Write a for loop that prints to the console only even numbers 0 through 100.

// for (let i = 0; i <= 100; i++) {
// 	if (i % 2 == 0) {
// 		console.log(i);
// 	}
// }

// [X]Write a for loop that will push every other fruit to an array.

// var fruit = ['banana', 'orange', 'apple', 'kiwi', 'pear', 'peach'];

// let evenFruit = [];
// for (let i = 0; i < fruit.length; i++) {
// 	if (i % 2 == 0) {
// 		evenFruit.push(fruit[i]);
// 	}
// }
// console.log(evenFruit);

// []Write a for loop that will push the numbers 0 through 9 to an array.
// let arr = [];

// for (let i = 0; i <= 9; i++) {
// 	arr.push(i);
// }
// console.log(arr);

// Silver Medal

var peopleArray = [
	{
		name: 'Harrison Ford',
		occupation: 'Actor',
	},
	{
		name: 'Justin Bieber',
		occupation: 'Singer',
	},
	{
		name: 'Vladimir Putin',
		occupation: 'Politician',
	},
	{
		name: 'Oprah',
		occupation: 'Entertainer',
	},
];

// ["Harrison Ford", "Vladimir Putin"] // names
// ["Singer", "Entertainer"] // occupations

// [X]  Write a loop that will print out all the names of the people of the people array

// for (let i = 0; i < peopleArray.length; i++) {
// 	console.log(peopleArray[i].name);
// }

// [X]  Write a loop that pushes the names into a names array, and the occupations into an occupations array.

// let names = [];
// let occups = [];
// for (let i = 0; i < peopleArray.length; i++) {
// 	names.push(peopleArray[i].name);
// 	occups.push(peopleArray[i].occupation);
// }
// console.log(names, occups);

// []  Write a loop that pushes every other name to an array starting with the first     person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".

// let names = [];
// let occups = [];

// for (let i = 0; i < peopleArray.length; i++) {
// 	if (i % 2 == 0) {
// 		names.push(peopleArray[i].name);
// 	}
// 	if (i % 2 != 0) {
// 		occups.push(peopleArray[i].occupation);
// 	}
// }
// console.log(names, occups);

//Gold Medal - Nesting
// Create an array that mimics a grid like the following using nested for loops:

// [[0, 0, 0],
// [0, 0, 0],
// [0, 0, 0]]

// const arr = [];
// for (let i = 0; i <= 0; i++) {
// 	arr.push([i, i, i], [i, i, i], [i, i, i]);
// }
// console.log(arr);

// 2.Create an array that mimics a grid like the following using nested for loops:
// [[0, 0, 0],
// [1, 1, 1],
// [2, 2, 2]]

// const arr = [];
// for (let i = 0; i <= 0; i++) {
// 	arr.push([i, i, i], [i + 1, i + 1, i + 1], [i + 2, i + 2, i + 2]);
// }
// console.log(arr);

// 3.Create an array that mimics a grid like the following using nested for loops:
// [[0, 1, 2],
// [0, 1, 2],
// [0, 1, 2]]

// const arr = [];
// let i = 0;
// let z = 0;
// let x = 1;
// let y = 2;
// for (0; i <= 3; i++) {
// 	arr.push([z, x, y]);
// }
// console.log(arr);

//Given a grid like the previous ones, write a nested for loop that would change every number to an x.

const arr = [];
let i = 0;
let z = 'x';
let x = 1;
let y = 2;
for (0; i <= 3; i++) {
	arr.push([z, x, y]);
}
console.log(arr);
