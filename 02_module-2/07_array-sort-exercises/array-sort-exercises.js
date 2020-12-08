// function leastToGreatest(arr) {
// 	return arr.sort((a, b) => a - b);
// }

// console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]

// function greatestToLeast(arr) {
// 	return arr.sort((a, b) => b - a);
// }

// console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]

function lengthSort(arr) {
	return arr.sort(function (a, b) {
		if (a.length < b.length) {
			return -1;
		}
		if (b.length < a.length) {
			return 1;
		}
		return 0;
	});
}

//low to high
// console.log(lengthSort(['dog', 'wolf', 'By', 'family', 'by', 'eaten'])); // ["by", "dog", "wolf", "eaten", "family"]

// function alphabetical(arr) {
// 	return arr.sort();
// }

// console.log(alphabetical(['dog', 'wolf', 'by', 'family', 'eaten'])); // ["by", "dog", "eaten", "family", "wolf"]

//Sort Objects

function byAge(arr) {
	return arr.sort((a, b) => {
		if (a.age > b.age) {
			return 1;
		}
		if (a.age < b.age) {
			return -1;
		} else return 0;
	});
}

console.log(
	byAge([
		{ name: 'Quiet Samurai', age: 22 },
		{ name: 'Arrogant Ambassador', age: 100 },
		{ name: 'Misunderstood Observer', age: 2 },
		{ name: 'Unlucky Swami', age: 77 },
	])
);
// => [ { name: 'Misunderstood Observer', age: 2 },
//  { name: 'Quiet Samurai', age: 22 },
//  { name: 'Unlucky Swami', age: 77 },
//  { name: 'Arrogant Ambassador', age: 100 } ]
