string = 'This to be typed';
chars = string.split('');

var i = 0;
animation = setInterval(function () {
	print = +chars[i];
	i++;
	if (i == string.length) {
		clearInterval(animation);
	}
}, 100);
