const express = require('express');
const UserController = require('../controller/users'); // Mengimpor UserController
const { userValidationRules } = require('../middleware/userValidator'); // Mengimpor validasi pengguna
const { loginValidationRules } = require('../middleware/loginValidator'); // Mengimpor validasi login

const router = express.Router();

// CREATE - POST (Register)
router.post('/register', userValidationRules(), UserController.register);

// READ - GET (Get all users)
router.get('/', UserController.getAllUsers);

// UPDATE - PATCH (Update user by ID)
router.patch('/:idUser', UserController.updateUser);

// DELETE - DELETE (Delete user by ID)
router.delete('/:idUser', UserController.deleteUser);

// LOGIN - POST (Login)
router.post('/login', loginValidationRules(), UserController.login);

module.exports = router;
