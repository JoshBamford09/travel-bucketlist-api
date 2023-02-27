const express = require('express');
const destinationController = require('../controllers/destination');

const router = express.Router();

router.post('', destinationController.addDestination);

module.exports = router;