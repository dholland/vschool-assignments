const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.delete('/', function (req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
