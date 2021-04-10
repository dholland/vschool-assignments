const { Bounty } = require('../models/');
const { connection } = require('mongoose');
const createBounties = require('./createBounties');

console.log('MODEL', Bounty);

module.exports = async (pages = 5) => {
	console.log('PAGES', pages);
	const docs = await createBounties(pages);

	console.log('DOCSSSSSS', docs.length);
	console.log(`CONNECTION, ${connection.name}`);

	const collection = await Bounty.insertMany(docs);
	return collection;
};
