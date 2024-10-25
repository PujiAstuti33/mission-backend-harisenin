const { body } = require('express-validator');

const ordersValidationRules = () => {
    return [
        body('userId')
            .notEmpty().withMessage('User ID is required')
            .isString().withMessage('User ID must be a string'),
        body('itemIds')
            .notEmpty().withMessage('Item IDs are required')
            .isArray().withMessage('Item IDs must be an array')
            .custom((value) => {
                if (value.length === 0) {
                    throw new Error('Item IDs array cannot be empty');
                }
                return true;
            }),
        body('totalAmount')
            .notEmpty().withMessage('Total amount is required')
            .isNumeric().withMessage('Total amount must be a number'),
        body('orderDate')
            .notEmpty().withMessage('Order date is required')
            .isISO8601().withMessage('Order date must be a valid date format'),
    ];
};

module.exports = {
    ordersValidationRules,
};
