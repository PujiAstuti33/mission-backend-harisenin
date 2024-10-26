const { body } = require('express-validator');

const loginValidationRules = () => [
    body('email')
        .isEmail().withMessage('Invalid email'),
    body('password')
        .notEmpty().withMessage('Password is required'),
];

module.exports = { loginValidationRules };
