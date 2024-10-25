const { body } = require('express-validator');

const pembayaranValidationRules = () => {
    return [
        body('userId')
            .notEmpty().withMessage('User ID is required')
            .isString().withMessage('User ID must be a string'),
        body('orderId')
            .notEmpty().withMessage('Order ID is required')
            .isString().withMessage('Order ID must be a string'),
        body('amount')
            .notEmpty().withMessage('Amount is required')
            .isNumeric().withMessage('Amount must be a number'),
        body('paymentDate')
            .notEmpty().withMessage('Payment date is required')
            .isISO8601().withMessage('Payment date must be a valid date format'),
        body('paymentMethod')
            .notEmpty().withMessage('Payment method is required')
            .isString().withMessage('Payment method must be a string'),
    ];
};

module.exports = {
    pembayaranValidationRules,
};
