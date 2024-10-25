const { body } = require('express-validator');

const genreValidationRules = () => {
    return [
        body('name')
            .notEmpty().withMessage('Name is required')
            .isString().withMessage('Name must be a string')
            .isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
        body('description')
            .optional() 
            .isString().withMessage('Description must be a string')
            .isLength({ max: 255 }).withMessage('Description cannot exceed 255 characters'),
    ];
};

module.exports = {
    genreValidationRules,
};
