const express = require('express');
const routes = require('./router');
const err = require('./error');

const app = express();

app.use(express.json());
app.use(express.static('public'))
app.use(routes);
app.use(err.client);

module.exports = app;
