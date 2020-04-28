// #1
// Loop through the following array and count how many "computers" there are. Log the final count:
// let officeItems = [
// 	'stapler',
// 	'monitor',
// 	'computer',
// 	'desk',
// 	'lamp',
// 	'computer',
// 	'lamp',
// 	'stapler',
// 	'computer',
// 	'computer',
// ];
// let count = 0;

// for (let i = 0; i < officeItems.length; i++) {
// 	if (officeItems[i] == 'computer') {
// 		count++;
// 	}
// }
// console.log(count);

var madMax = [
	{
		name: 'Mike',
		age: 12,
		gender: 'male',
	},
	{
		name: 'Madeline',
		age: 80,
		gender: 'female',
	},
	{
		name: 'Cheryl',
		age: 22,
		gender: 'female',
	},
	{
		name: 'Sam',
		age: 30,
		gender: 'male',
	},
	{
		name: 'Suzy',
		age: 4,
		gender: 'female',
	},
];
const oldEnough = [];
for (let i = 0; i < madMax.length; i++) {
	if (madMax[i].age > 18) {
		oldEnough.push(madMax[i].name);
	} else {
		console.log(madMax[i].name + ' is not old enough');
	}
}
console.log(oldEnough);
