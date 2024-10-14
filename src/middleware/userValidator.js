const { body } = require('express-validator');

const userValidationRules = () => {
    return [
        body('email').isEmail().withMessage('Email harus valid'),
        body('name').notEmpty().withMessage('Nama tidak boleh kosong'),
        body('address').notEmpty().withMessage('Alamat tidak boleh kosong'),
    ];
}

module.exports = {
    userValidationRules,
};
