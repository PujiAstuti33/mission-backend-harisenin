const express = require('express');
const UsersController = require('../controller/users');

const router = express.Router();

// Verifikasi email melalui link
router.get('/', UsersController.verifyEmail);

module.exports = router;
