const express = require('express');
const destinationController = require('../controllers/destination');

const router = express.Router();

router.post('', destinationController.addDestination);
router.get('', destinationController.getAllDestinations);
router.get('/:id', destinationController.getDestination);
router.patch('/:id', destinationController.updateDestination);
router.delete('/:id', destinationController.deleteDestination);

module.exports = router;