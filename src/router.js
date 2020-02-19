const express = require('express');
const router = express.Router();

const {
    recipeSearch,
    randomSearch,
} = require('./controller');

router.use(express.urlencoded({ extended: false }));
router.post('/search', recipeSearch);
router.post('/random', randomSearch);

module.exports = router;