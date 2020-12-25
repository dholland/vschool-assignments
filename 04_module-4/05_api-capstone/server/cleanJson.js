const fs = require('fs');
const data = require('./json/vauto_inventory.json');

// const createMakesModels = (array) => {
// 	let makesAndModels = {};
// 	for (let i = 0; i < array.length; i++) {
// 		if (!makesAndModels[array[i].Make]) {
// 			makesAndModels[array[i].Make] = [array[i].Model];
// 		} else if (!makesAndModels[array[i].Make].includes(array[i].Model)) {
// 			makesAndModels[array[i].Make].push(array[i].Model);
// 		}
// 	}
// 	return { makesAndModels: makesAndModels };
// };

// fs.writeFileSync(
// 	'./json/makesAndModels.json',
// 	JSON.stringify(createMakesModels(data.vehicles))
// );

// console.log(data.makesAndModels);

const cleanJson = (arr) => {
	let id = 1;
	return arr.map((item) => {
		item.id = id++;
		item.Photos = item.Photos.split('|');
		item.mainPhoto = item.Photos[0];
		item.Features = item.Features.split('|');
		return item;
	});
};

fs.writeFileSync(
	'./json/cleanInventory.json',
	JSON.stringify({
		vehicles: cleanJson(data.vehicles),
		makesmodels: data.makesAndModels,
	})
);
