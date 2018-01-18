const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Flat = require('./model/flats');
const routes = require('./routes/index');

const app = express();
const port = process.env.API_PORT || 3001;

require('dotenv').config({ path: 'variables.env' });
mongoose.connect(process.env.DATABASE);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));
