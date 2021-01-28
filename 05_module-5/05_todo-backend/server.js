const express = require('express');
const logger = require('morgan');

const todosRouter = require('./routes/todos');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/todos', todosRouter);

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`Express app is listening on port ${port}`);
});
