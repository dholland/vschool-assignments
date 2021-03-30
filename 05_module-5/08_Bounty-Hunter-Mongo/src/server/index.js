const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

require('./database');

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: '*' }));

app.use('/bounties', require('./routes/bountiesRouter'));

app.use((err, _, res) => {
	console.log(err);
	res.send({ error: err.message });
});

app.listen(
	process.env.PORT,
	console.log(`server running on ${process.env.PORT}`)
);
