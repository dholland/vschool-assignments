const { Bounty } = require('../models/');
const { connection } = require('mongoose');
const createBounties = require('./createBounties');

console.log('MODEL', Bounty);

module.exports = async (pages = 5) => {
	const docs = await createBounties(pages);

	console.log('DOCSSSSSS', docs);
	console.log(`CONNECTION, ${connection.name}`);

	// console.log(`Seeding ${pages} pages of bounties into ${connection.name}`);
	const collection = await Bounty.insertMany(docs);
	// console.log(`${plural}: ${collection}`);
	return collection;
};
