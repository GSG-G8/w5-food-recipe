const express = require('express');
const router = express.Router();

<<<<<<< HEAD
const {
    recipeSearch,
    randomSearch,
} = require('./controller');
=======
const {recipeSearch} = require('./controller');
>>>>>>> 144964751e14786c953f8aa787455900f3d546fd

router.use(express.urlencoded({ extended: false }));
router.post('/search', recipeSearch);
router.post('/random', randomSearch);

module.exports = router;