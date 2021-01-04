const csv = require('csvtojson');
const fs = require('fs');

const csvFilePath = './csv/vauto_inventory_210103.csv';

csv()
	.fromFile(csvFilePath)
	.then((jsonObj) => {
		const createMakesModels = (array) => {
			let makesAndModels = {};
			for (let i = 0; i < array.length; i++) {
				if (!makesAndModels[array[i].Make]) {
					makesAndModels[array[i].Make] = [array[i].Model];
				} else if (!makesAndModels[array[i].Make].includes(array[i].Model)) {
					makesAndModels[array[i].Make].push(array[i].Model);
				}
			}
			return makesAndModels;
		};

		const removeLowPhotos = (array) => {
			return array.filter((item) => item['Photo Count'] > 5);
		};

		const limitFile = (array) => {
			return array.slice(1, 5);
		};

		fs.writeFileSync(
			'./json/vauto_inventory.json',
			JSON.stringify({
				vehicles: removeLowPhotos(jsonObj),
				makesAndModels: createMakesModels(removeLowPhotos(jsonObj)),
			})
		);
	});
