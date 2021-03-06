'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const axios = require("axios")
const router = express.Router();


router.get('/', (req, res) => {

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Danny.js!</h1>');
  res.end();
});

router.get('/test', (req, res) => {
  axios.get('https://swapi.dev/api/people/1').then(data => {
    res.send(JSON.stringify(data))
  })
  // res.send('got data')
})

router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

// app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
// app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);