const fs = require('fs');
const data = require('./json/vauto_inventory.json');

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
		bookings: []
	})
);
