const express = require('express');
const PembayaranController = require('../controller/pembayaran.js');
const { pembayaranValidationRules } = require('../middleware/pembayaranValidator');

const router = express.Router();

// CREATE - POST
router.post('/', pembayaranValidationRules(), PembayaranController.createNewPembayaran);

// READ - GET 
router.get('/', PembayaranController.getAllPembayaran);

// UPDATE - PATCH
router.patch('/:idPembayaran', PembayaranController.updatePembayaran);

// DELETE - DELETE
router.delete('/:idPembayaran', PembayaranController.deletePembayaran);

module.exports = router;
