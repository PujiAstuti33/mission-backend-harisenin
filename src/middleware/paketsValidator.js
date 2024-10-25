const { body } = require('express-validator');

const paketsValidationRules = () => {
    return [
        body('Nama').notEmpty().withMessage('Nama is required'),
        body('Harga').isNumeric().withMessage('Harga must be a number'),
        body('Durasi').notEmpty().withMessage('Durasi is required'),
    ];
};

module.exports = {
    paketsValidationRules,
};
