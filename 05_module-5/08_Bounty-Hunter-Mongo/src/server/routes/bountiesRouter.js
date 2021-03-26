const express = require('express');

const bountyRouter = express.Router();
const { Bounty } = require('../models/');

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

// GET ONE
bountyRouter.get('/:bountyId', (req, res, next) => {
	const bountyId = req.params.bountyId;
	Bounty.findById(bountyId).exec((err, bounty) => {
		if (err) {
			res.status(500);
			const error = new Error(
				`This item with id ${bountyId} could not be found`
			);
			return next(error);
		}
		return res.status(200).send(bounty);
	});
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
bountyRouter.put('/', (req, res, next) => {
	const newBounty = new Bounty(req.body);
	newBounty.save((err, savedBounty) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res.status(201).send(savedBounty);
	});
});

// DELETE ONE

module.exports = bountyRouter;
