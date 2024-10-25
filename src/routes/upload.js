// routes/upload.js
const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer'); // Mengimpor middleware multer
const uploadFile = require('../controller/upload'); // Mengimpor controller upload

// routes/upload.js
router.post('/', upload.single('image'), (req, res, next) => {
    console.log('Received file:', req.file); // Tambahkan log ini
    next();
}, uploadFile);

module.exports = router;
