require('.'); // instantiate a database connection
const { connection } = require('mongoose');

const seedBounties = require('./seedBounties');

connection.dropDatabase();

const seedDatabase = async () => {
	try {
		await seedBounties(6);
		connection.close();
	} catch (err) {
		console.log(err); // eslint-disable-line
	}
};

seedDatabase();
