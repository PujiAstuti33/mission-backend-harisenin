// routes/upload.js
const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer'); // Mengimpor middleware multer
const uploadFile = require('../controller/upload'); // Mengimpor controller upload

// routes/upload.js
router.post('/', upload.single('image'), (req, res, next) => {
    console.log('Body request:', req.body);  // Log body request
    console.log('Received file:', req.file);  // Log file yang diterima

    // Mengecek apakah file ada
    if (!req.file) {
        return res.status(400).json({ message: 'File upload failed' });
    }
    
    next();
}, uploadFile);

module.exports = router;
