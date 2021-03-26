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

module.exports = bountyRouter;
