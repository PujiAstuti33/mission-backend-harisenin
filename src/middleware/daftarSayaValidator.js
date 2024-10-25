const { body } = require('express-validator');

const daftarSayaValidationRules = () => {
    return [
        body('ID_User').notEmpty().withMessage('ID_User is required'),
        body('ID_EpisodeMovie').notEmpty().withMessage('ID_EpisodeMovie is required'),
        body('Tanggal_Ditambahkan').notEmpty().withMessage('Tanggal_Ditambahkan is required'),
    ];
};

module.exports = {
    daftarSayaValidationRules,
};
