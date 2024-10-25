const { body } = require('express-validator');

const episodeMovieValidationRules = () => {
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
        body('episodeNumber')
            .notEmpty().withMessage('Episode Number is required')
            .isInt({ min: 1 }).withMessage('Episode Number must be a positive integer'),
        body('idSeriesFilm')
            .notEmpty().withMessage('ID Series Film is required')
            .isString().withMessage('ID Series Film must be a string'),
    ];
};

module.exports = {
    episodeMovieValidationRules,
};
