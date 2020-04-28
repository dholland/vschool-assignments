var fruit = ['banana', 'apple', 'orange', 'watermelon'];
var vegetables = ['carrot', 'tomato', 'pepper', 'lettuce'];

//Remove the last item from the vegetable array.
function produceStand() {
	vegetables.pop();
	fruit.shift();
	let i = fruit.indexOf('orange');
	fruit.push(i);
	let len = vegetables.length;
	vegetables.push(len);
	let food = [];
	food = food.concat(fruit, vegetables);
	food.splice(4, 2);
	food.reverse();
	food.join(',');
	return food;
}
const food = produceStand();

// console.log(food, /n/, meal);

//3,pepper,1,watermelon,orange,apple

console.log('meal: ', food);
console.log('fruit: ', fruit);
console.log('vegetables: ', vegetables);
