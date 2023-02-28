const express = require('express');
const listController = require('../controllers/list');

const router = express.Router();

router.post('', listController.addList);
router.get('', listController.getAllLists);
router.get('/:id', listController.getList);
router.patch('/:id', listController.updateList);
router.delete('/:id', listController.deleteList);

module.exports = router;