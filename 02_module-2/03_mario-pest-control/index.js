form = document.pestControl;

form.addEventListener('change', handleChange);
form.addEventListener('submit', handleSubmit);

const totalCoins = document.getElementById('takehome');
const balance = document.getElementById('balance');

let totalGoombahs = 0;
let totalBobombs = 0;
let totalCheeps = 0;
let goombahsValue = 0;
let bobombValue = 0;
let cheepValue = 0;
let totalBalance = 0;

function handleChange(e) {
	if (e.target.name === 'Goombah') {
		totalGoombahs = +e.target.value;
		goombahsValue = e.target.value * 5;
	} else if (e.target.name === 'bob-omb') {
		totalBobombs = +e.target.value;
		bobombValue = e.target.value * 7;
	} else if (e.target.name === 'cheep-cheep') {
		totalCheeps = +e.target.value;
		cheepValue = e.target.value * 11;
	}

	sum = getSum(goombahsValue, bobombValue, cheepValue);

	console.log(sum);
	totalCoins.textContent = sum;
}

function getSum(num1, num2, num3) {
	let sum = 0;
	sum = num1 + num2 + num3;
	return sum;
}

function handleSubmit(e) {
	e.preventDefault();
	sum = getSum(goombahsValue, bobombValue, cheepValue);
	totalBalance = totalBalance + sum;
	console.log(totalBalance);

	balance.textContent = totalBalance;
	totalCoins.textContent = 0;
	form.reset();
}
