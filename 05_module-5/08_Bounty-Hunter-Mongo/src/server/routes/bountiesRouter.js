const express = require('express');

const bountyRouter = express.Router();
const { Bounty } = require('../models/');
const seedDatabase = require('../database/reset');

// GET ALL
bountyRouter.get('/', (req, res, next) => {
	Bounty.find((err, bounties) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		Bounty.countDocuments({}, function (err, count) {
			if (err) {
				res.status(500);
				return next(err);
			} else {
				console.log(count);
				return res.status(200).send({ total: count.toString(), bounties });
			}
		});
	});
});

bountyRouter.get('/count', (req, res, next) => {
	Bounty.countDocuments({}, function (err, count) {
		if (err) {
			res.status(500);
			return next(err);
		} else {
			console.log(count);
			return res.status(200).send(count.toString());
		}
	});
});

// Reset Bounties
bountyRouter.get('/reset/:pages', async (req, res, next) => {
	const pages = req.params.pages;
	if (!req.params.pages) {
		console.log('NExT');
		next();
		return;
	}
	await seedDatabase(pages);
	const count = await Bounty.countDocuments({}).exec();
	res.status(200).send({ Total: count });
});

// Reset Bounties
bountyRouter.get('/reset', async (req, res, next) => {
	await seedDatabase();
	const count = await Bounty.countDocuments({}).exec();
	res.status(200).send({ Total: count });
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
bountyRouter.delete('/:bountyId', async (req, res, next) => {
	const person = await Bounty.findById(req.params.bountyId).exec();
	Bounty.deleteOne({ _id: req.params.bountyId }, (err) => {
		if (err) {
			res.status(500);
			return next(err);
		}
		return res
			.status(201)
			.send(`Removed ${person.name} || ${req.params.bountyId} successfully`);
	});
});

module.exports = bountyRouter;
