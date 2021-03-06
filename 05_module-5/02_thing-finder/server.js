const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const morgan = require('morgan');
//Middleware

const data = require('./data');

app.use(morgan('dev'));
app.use(express.json());

const priceCheck = (req, res, next) => {
	req.user = 'danny';
	next();
};

app.use('/data', priceCheck);

app.get('/data', (req, res) => {
	data.push({ user: req.user });

	res.send(data);
});

app.get('/data/price/', (req, res) => {
	let lowPrice = req.query.lowPrice || 0;
	let highPrice = req.query.highPrice || 1000000;
	console.log(lowPrice);
	console.log(highPrice);
	const filteredPrice = data.filter((item) => {
		return item.price >= lowPrice && item.price <= highPrice;
	});

	res.send(filteredPrice);
});

app.get('/data/:type', (req, res) => {
	// console.log(req.params.type);
	const type = data.filter((item) => item.type === req.params.type);
	// console.log(type);
	res.send(type);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
