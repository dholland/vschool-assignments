// https://coursework.vschool.io/array-reduce-exercises/

// function total(arr) {
// 	return arr.reduce((sum, num) => (sum += num));
// }

// console.log(total([1, 2, 3])); // 6

// function stringConcat(arr) {
// 	return arr.reduce(function (final, num) {
// 		return (final += num);
// 	}, '');
// }

// console.log(stringConcat([1, 2, 3])); // "123"

// function totalVotes(arr) {
// 	return arr.reduce(function (totalVotes, voter) {
// 		if (!voter.voted) {
// 			totalVotes++;
// 		}
// 		return totalVotes;
// 	}, 0);
// }

// var voters = [
// 	{ name: 'Bob', age: 30, voted: true },
// 	{ name: 'Jake', age: 32, voted: true },
// 	{ name: 'Kate', age: 25, voted: false },
// 	{ name: 'Sam', age: 20, voted: false },
// 	{ name: 'Phil', age: 21, voted: true },
// 	{ name: 'Ed', age: 55, voted: true },
// 	{ name: 'Tami', age: 54, voted: true },
// 	{ name: 'Mary', age: 31, voted: false },
// 	{ name: 'Becky', age: 43, voted: false },
// 	{ name: 'Joey', age: 41, voted: true },
// 	{ name: 'Jeff', age: 30, voted: true },
// 	{ name: 'Zack', age: 19, voted: false },
// ];
// console.log(totalVotes(voters)); // 7

// function shoppingSpree(arr) {
// 	return arr.reduce(function (cost, item) {
// 		return (cost += item.price);
// 	}, 0);
// }

// var wishlist = [
// 	{ title: 'Tesla Model S', price: 90000 },
// 	{ title: '4 carat diamond ring', price: 45000 },
// 	{ title: 'Fancy hacky Sack', price: 5 },
// 	{ title: 'Gold fidgit spinner', price: 2000 },
// 	{ title: 'A second Tesla Model S', price: 90000 },
// ];

// console.log(shoppingSpree(wishlist)); // 227005

// function flatten(arr) {
// 	return arr.reduce(function (acc, array) {
// 		return acc.concat(array);
// 	}, []);
// }

// var arrays = [['1', '2', '3'], [true], [4, 5, 6]];

// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

var voters = [
	{ name: 'Bob', age: 30, voted: true },
	{ name: 'Jake', age: 32, voted: true },
	{ name: 'Kate', age: 25, voted: false },
	{ name: 'Sam', age: 20, voted: false },
	{ name: 'Phil', age: 21, voted: true },
	{ name: 'Ed', age: 55, voted: true },
	{ name: 'Tami', age: 54, voted: true },
	{ name: 'Mary', age: 31, voted: false },
	{ name: 'Becky', age: 43, voted: false },
	{ name: 'Joey', age: 41, voted: true },
	{ name: 'Jeff', age: 30, voted: true },
	{ name: 'Zack', age: 19, voted: false },
];

function voterResults(arr) {
	return arr.reduce(
		function (final, voter) {
			if (voter.age <= 25) {
				final.youth = final.youth + 1;
				if (voter.voted) {
					final.youngVotes = final.youngVotes + 1;
				}
			}
			if ((voter.age >= 26) & (voter.age <= 35)) {
				final.mids = final.mids + 1;
				if (voter.voted) {
					final.midVotes = final.midVotes + 1;
				}
			}
			if (voter.age >= 36) {
				final.olds = final.olds + 1;
				if (voter.voted) {
					final.oldVotes = final.oldVotes + 1;
				}
			}
			final.totalVotes = arr.filter((voter) => voter.voted).length;
			return final;
		},
		{ youngVotes: 0, youth: 0, mids: 0, midVotes: 0, oldVotes: 0, olds: 0 }
	);
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}*/
