function insertCommas(num) {
	let result = '';
	num
		.toString()
		.split('')
		.reverse()
		.forEach((number, i, arr) => {
			result += number;
			if ((i + 1) % 3 === 0 && i !== arr.length - 1) {
				result += ',';
			}
		});
	return result.split('').reverse().join('');
}
