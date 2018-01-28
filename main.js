const express = require('express');
const bodyParser = require('body-parser');

const memoapi = require('./memo');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/', memoapi);

app.listen(3000);