// function sum(x, y) {
// 	try {
// 		if (isNaN(x) || isNaN(y)) {
// 			throw 'Please enter a Number';
// 		} else {
// 			return x + y;
// 		}
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

// console.log(sum(2, 'danny'));

var user = { username: 'sam', password: '123abc' };

function login(username, password) {
	if (username !== user.username) {
		throw "Name doesn't match";
	} else if (password !== user.password) {
		throw "Password doesn't match";
	} else {
		console.log('login successful');
	}
}

try {
	login('sam', '123abc');
} catch (err) {
	console.log(err);
}
