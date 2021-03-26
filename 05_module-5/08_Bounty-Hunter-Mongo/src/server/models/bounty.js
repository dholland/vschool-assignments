const { model, Schema } = require('mongoose');

const bountySchema = new Schema({
	name: {
		type: String,
	},
	species: {
		type: String,
	},
	status: {
		type: String,
	},
	gender: {
		type: String,
	},
	type: {
		type: String,
	},
	image: {
		type: String,
	},
	location: {
		type: Object,
	},
});

module.exports = model('bounty', bountySchema);
