const express = require('express');
const router = express.Router();
const { getTarget, updateTarget } = require('../controllers/targetController');

router.get('/', getTarget);
router.put('/', updateTarget);

module.exports = router;