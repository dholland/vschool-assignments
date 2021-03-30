const express = require('express');

const bountyRouter = express.Router();
const { Bounty } = require('../modules/');

bountyRouter.get('/', (req, res, next) => {
  Bounty.find((err, bounties) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(bounties);
  });
});

bountyRouter.post('/', (req, res, next) => {
  const newBounty = new Bounty(req.body);

  Bounty.save((err, savedBounty) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedBounty);
  });
});

module.exports = bountyRouter;
