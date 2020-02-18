const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { Router } = express;
const router = Router();

const {
    recipeSearch
} = require('./controller');

app.use(bodyParser.urlencoded({ extended: false }));
app.post('/search', recipeSearch);

app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));

module.exports = router;