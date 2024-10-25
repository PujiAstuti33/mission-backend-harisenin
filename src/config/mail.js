const express = require('express');
const UsersController = require('../controller/users');

const router = express.Router();

router.post('/', UsersController.verifyEmail); 

module.exports = router;
