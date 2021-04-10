require('.'); // instantiate a database connection
const { connection } = require('mongoose');

const seedBounties = require('./seedBounties');

const seedDatabase = async (pages = 1) => {
	connection.dropDatabase();
	try {
		await seedBounties(pages);
		// connection.close();
	} catch (err) {
		console.log(err); // eslint-disable-line
	}
};

module.exports = seedDatabase;
