const express = require('express');

const bountyRouter = express.Router();
const { Bounty } = require('../models/');
const newTrue = { new: true };
// GET ALL
bountyRouter.get('/', (req, res, next) => {
	Bounty.find((err, bounties) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res.status(200).send(bounties);
	});
});

bountyRouter.get('/location/:name', (req, res, next) => {
	console.log('REQ PARAMS', req.params);
	Bounty.find({ 'location.name': req.params.name }, (err, locationNames) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res.status(200).send(locationNames);
	});
});

bountyRouter.get('/status', (req, res, next) => {
	Bounty.find(
		{
			$and: [
				{ 'location.name': req.query.locationName },
				{ status: req.query.status },
			],
		},
		(err, locationNames) => {
			if (err) {
				res.status(500);
				return next(err);
			}
			return res.status(200).send(locationNames);
		}
	);
});

bountyRouter.get('/dead', (req, res, next) => {
	Bounty.find({ status: 'Dead' }, (err, deadpeeps) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res.status(200).send(deadpeeps);
	});
});

// GET ONE
bountyRouter.get('/:bountyId', async (req, res, next) => {
	const bountyId = req.params.bountyId;

	const foundBounty = await Bounty.findOne({ _id: bountyId }, (err, bounty) => {
		if (err) {
			res.status(500);
			const error = new Error(
				`This item with id ${bountyId} could not be found`
			);
			return next(error);
		}
		return bounty;
	});

	return res.status(200).send(foundBounty);

	// Bounty.findById(bountyId).exec((err, bounty) => {
	// 	if (err) {
	// 		res.status(500);
	// 		const error = new Error(
	// 			`This item with id ${bountyId} could not be found`
	// 		);
	// 		return next(error);
	// 	}
	// 	return res.status(200).send(bounty);
	// });
});

// POST ONE
bountyRouter.post('/', (req, res, next) => {
	const newBounty = new Bounty(req.body);
	newBounty.save((err, savedBounty) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res.status(201).send(savedBounty);
	});
});

// UPDATE ONE
bountyRouter.put('/:bountyId', (req, res, next) => {
	const updatedBountyId = req.params.bountyId;

	Bounty.findByIdAndUpdate(
		updatedBountyId,
		req.body,
		newTrue,
		(err, bounty) => {
			if (err) {
				res.status(500);
				const error = new Error(
					`This item with id ${bountyId} could not be updated`
				);
				return next(error);
			}
			res.status(200).send(bounty);
		}
	);
});

// UPDATE Location
bountyRouter.put('/scene/:sceneId/', (req, res, next) => {
	const updatedBountyId = req.params.bountyId;

	Bounty.findByIdAndUpdate(
		updatedBountyId,
		{
			$set: {
				'scene._id': req.params.sceneId,
			},
		},
		newTrue,
		(err, bounty) => {
			if (err) {
				res.status(500);
				const error = new Error(
					`This item with id ${bountyId} could not be updated`
				);
				return next(error);
			}
			res.status(200).send(bounty);
		}
	);
});

// DELETE ONE

module.exports = bountyRouter;
