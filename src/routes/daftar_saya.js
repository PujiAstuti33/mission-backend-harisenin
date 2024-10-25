const express = require('express');
const DaftarSayaController = require('../controller/daftar_saya.js');
const { daftarSayaValidationRules } = require('../middleware/daftarSayaValidator');

const router = express.Router();

// CREATE - POST
router.post('/', daftarSayaValidationRules(), DaftarSayaController.createNewDaftarSaya);

// READ - GET
router.get('/', DaftarSayaController.getAllDaftarSaya);

// UPDATE - PATCH
router.patch('/:idDaftar', DaftarSayaController.updateDaftarSaya);

// DELETE - DELETE
router.delete('/:idDaftar', DaftarSayaController.deleteDaftarSaya);

module.exports = router;
