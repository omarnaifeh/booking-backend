const express = require('express');
const userController = require('../Controller/userController');
const router = express.Router();

router.post('/register', userController.registerUser);

module.exports = router;
