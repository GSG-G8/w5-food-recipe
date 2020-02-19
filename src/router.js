const express = require('express');
const router = express.Router();

const {recipeSearch} = require('./controller');

router.use(express.urlencoded({ extended: false }));
router.post('/search', recipeSearch);

module.exports = router;