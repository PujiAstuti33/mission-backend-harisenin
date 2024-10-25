const express = require('express');
const UsersController = require('../controller/users');

const router = express.Router();

// CREATE - POST (REGISTER / VERIFY EMAIL)
router.post('/verify-email', UsersController.verifyEmail);

module.exports = router;
