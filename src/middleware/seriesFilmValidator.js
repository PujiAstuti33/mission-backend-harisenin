const { body } = require('express-validator');

const seriesFilmValidationRules = () => {
    return [
        body('title')
            .notEmpty().withMessage('Title is required')
            .isString().withMessage('Title must be a string')
            .isLength({ min: 3 }).withMessage('Title must be at least 3 characters long'),
        body('description')
            .optional() 
            .isString().withMessage('Description must be a string')
            .isLength({ max: 500 }).withMessage('Description cannot exceed 500 characters'),
        body('releaseDate')
            .notEmpty().withMessage('Release Date is required')
            .isISO8601().withMessage('Release Date must be a valid date'),
        body('genre')
            .notEmpty().withMessage('Genre is required')
            .isArray().withMessage('Genre must be an array of strings')
            .custom((value) => {
                value.forEach(genre => {
                    if (typeof genre !== 'string') {
                        throw new Error('Each genre must be a string');
                    }
                });
                return true; 
            }),
    ];
};

module.exports = {
    seriesFilmValidationRules,
};
