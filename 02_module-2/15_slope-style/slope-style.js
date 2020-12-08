// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
function collectAnimals(...animals) {
	return animals;
}

// Use destructuring to use the property names as variables:

// console.log(collectAnimals('dog', 'cat', 'mouse', 'jackolope', 'platypus'));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// Use destructuring to use the property names as variables:

// const vacation = {
// 	location: 'Burly Idaho',
// 	duration: '3 weeks',
// };

// function parseSentence({ location, duration }) {
// 	return `We're going to have a good time in ${location} for ${duration}`;
// }

// console.log(parseSentence(vacation));

function unshift(array, ...second) {
	return [...second].concat(...array).sort();
}

// console.log(unshift(['f', 'g', 'h'], 'a', 'b', 'c', 'd', 'e', 'i', 'j'));

function combineFruit(fruit, sweets, vegetables) {
	return {
		fruits: [...fruit],
		sweets: [...sweets],
		vegetables: [...vegetables],
	};
}
// console.log(combineFruit(['apple', 'pear'], ['cake', 'pie'], ['carrit']));
// => {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrit"]
//      }

const vacation = {
	location: 'Burly Idaho',
	duration: '2 weeks',
};

// function parseSentence({ location, duration }) {
// 	return `We're going to have a good time in ${location} for ${duration}`;
// }

function returnFirst(items) {
	return (firstItem = items[1]); /*change this line to be es6*/
}

// console.log(returnFirst(['dog', 'cat', 'pig']));

const favoriteActivities = [
	'magnets',
	'snowboarding',
	'philanthropy',
	'janitor work',
	'eating',
];

function returnFavorites(arr) {
	[firstFav, secondFav, thirdFav] = arr;
	return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
}
// console.log(returnFavorites(favoriteActivities));

function combineAnimals(arr1, arr2, arr3) {
	return [...arr1].concat(...arr2, ...arr3);
}

const realAnimals = ['dog', 'cat', 'mouse'];
const magicalAnimals = ['jackolope'];
const mysteriousAnimals = ['platypus'];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

function product(...arr) {
	var numbers = [...arr];
	console.log(numbers);
	return numbers.reduce(function (acc, number) {
		return acc * number;
	}, 1);
}

// console.log(product(1, 2, 4, 5));

function populatePeople(names) {
	return names.map(function (name) {
		[firstName, lastName] = name.split(' ');
		return {
			firstName: `${firstName}`,
			lastName: `${lastName}`,
		};
	});
}

console.log(populatePeople(['Frank Peterson', 'Suzy Degual', 'Liza Jones']));
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"}
