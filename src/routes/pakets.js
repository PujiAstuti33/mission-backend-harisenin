// routes/pakets.js
const express = require('express');
const PaketsController = require('../controller/pakets'); 
const { paketsValidationRules } = require('../middleware/paketsValidator');

const router = express.Router();

// CREATE - POST
router.post('/', paketsValidationRules(), PaketsController.createNewPakets);

// READ - GET 
router.get('/', PaketsController.getAllPakets);

// UPDATE - PATCH
router.patch('/:idPakets', PaketsController.updatePakets);

// DELETE - DELETE
router.delete('/:idPakets', PaketsController.deletePakets);

module.exports = router;
