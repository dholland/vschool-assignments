///Make a function that will return any given string into all caps followed by the same string all lowercase.

function capilizeAndLowercase(str) {
	return (newStr = str.toUpperCase() + str.toLowerCase());
}

// console.log(capilizeAndLowercase('Hello'));
// => "HELLOhello"

// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().

function findMiddleIndex(str) {
	return (split = Math.floor(str.length / 2));
}

// console.log(findMiddleIndex('Hello'));
// => 2

// console.log(findMiddleIndex('Hello World'));
// => 5

// Make a function that uses slice() and the other functions you've written to return the first half of the string
function returnFirstHalf(str) {
	const mid = findMiddleIndex(str);
	return (newStr = str.slice(0, mid));
}

function returnSecondHalf(str) {
	const mid = findMiddleIndex(str);
	return (newStr = str.slice(mid));
}

// console.log(returnFirstHalf('Hello'));
// => "He"
// console.log(returnFirstHalf('Hello World'));
// => "Hello");

// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.
function capilizeAndLowercase(str) {
	const first = returnFirstHalf(str);
	const second = returnSecondHalf(str);
	return (newStr = first.toUpperCase() + second.toLowerCase());
}

// console.log(capilizeAndLowercase('Hello'));
// => "HEllo";
// console.log(capilizeAndLowercase('Hello World'));
// => "HELLO world");

// Optional Code Challenge (This one is a step up in difficulty and utilizes the .split() string method and .join() array method):

// Make a function that takes any string and capitalizes any character that follows a space.

function capitalize(str) {
	const newStr = [];
	const capStr = str.split(' ');
	for (let i = 0; i < capStr.length; i++) {
		const toTitleCase = capStr[i][0].toUpperCase().concat(capStr[i].slice(1));
		newStr.push(toTitleCase);
	}
	return newStr.join(' ');
}

console.log(capitalize('hey friends! practice practice practice!')); // -> "Hey Friends! Practice Practice Practice!"
