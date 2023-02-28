const express = require('express');
const favouriteController = require('../controllers/favourite');

const router = express.Router();

router.post('', favouriteController.addFavourite);

module.exports = router;