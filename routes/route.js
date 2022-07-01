const express = require('express');
const { userController } = require('../controllers');
const router = express.Router();

// calling user controller
router.get('/getUserData', userController.getUserData);

module.exports = router;
