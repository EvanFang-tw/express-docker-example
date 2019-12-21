// Load env variables from .env file
require('dotenv').config();
const port = process.env.APP_PORT;

const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('tiny'));

app.use(require('./routes/index.routes'));

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
