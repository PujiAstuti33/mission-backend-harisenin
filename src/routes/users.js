const express = require('express');

const UserController = require('../controller/users.js');

const { userValidationRules } = require('../middleware/userValidator');

const router = express.Router();

// CREATE - POST
router.post('/', userValidationRules(), UserController.createNewUser);

// READ - GET 
router.get('/', UserController.getAllUsers);

// UPDATE - PATCH
router.patch('/:idUser', UserController.updateUser);

// DELETE - DELETE
router.delete('/:idUser', UserController.deleteUser);


module.exports = router;