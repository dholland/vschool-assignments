var readline = require('readline-sync');

var input = readline
	.question('What phrase would you like to encrypt? ')
	.toLowerCase();
var shift = parseInt(
	readline.question('How many letters would you like to shift? ')
);

const key = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'-',
	' ',
	'!',
	'.',
	',',
	'?',
];

function encode(str, shift) {
	//make array out of upper case values of input
	const encode = str.toUpperCase().split('');
	// console.log('origional String', encode);
	const firstIndex = [];
	//turn array into a set of keys to then search through alphabet
	for (let i = 0; i < encode.length; i++) {
		//gets each letter of input and the key for it in the alphabet(key)
		firstIndex.push(key.indexOf(encode[i]));
	}
	// console.log('first index', firstIndex.length);
	//for each of the keys add the shift amount and create new array to match back to the alphabet
	const newIndex = [];
	if (shift > 0) {
		firstIndex.forEach((num) => {
			if (num > 26) {
				newIndex.push(num);
			} else if (num >= 0) {
				const newNum = num + shift;
				if (newNum >= 26) {
					//if to big cycle back around
					newIndex.push(newNum - 26);
				} else newIndex.push(newNum);
			}
		});
	} else {
		firstIndex.forEach((num) => {
			if (num > 26) {
				newIndex.push(num);
			} else if (num >= 0) {
				const newNum = num + shift;
				if (newNum < 0) {
					//if to big cycle back around
					newIndex.push(newNum + 26);
				} else newIndex.push(newNum);
			}
		});
	}

	console.log('first index', firstIndex.length);
	console.log('new index', newIndex.length);

	//put sentence back together
	let newStr = [];
	for (let j = 0; j < newIndex.length; j++) {
		newStr.push(key[newIndex[j]]);
	}
	return newStr.join('');
}

//tests
console.log(encode(input, shift));
