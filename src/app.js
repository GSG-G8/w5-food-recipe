const express = require('express');
const routes = require('./router');
const err = require('./error');

const app = express();

app.use(express.json());
app.use(express.static('public'))
app.use(err.client);
app.use(err.server);
app.use(routes);

module.exports = app;