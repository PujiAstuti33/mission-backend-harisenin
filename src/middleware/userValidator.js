const { body } = require('express-validator');

const userValidationRules = () => [
    body('fullname')
        .notEmpty().withMessage('Fullname is required')
        .isLength({ max: 100 }).withMessage('Fullname must not exceed 100 characters'),
    body('username')
        .notEmpty().withMessage('Username is required')
        .isLength({ max: 100 }).withMessage('Username must not exceed 100 characters'),
    body('email')
        .isEmail().withMessage('Invalid email'),
    body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
];

module.exports = { userValidationRules };
