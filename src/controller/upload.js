// controller/upload.js
const uploadFile = (req, res) => {
    if (req.file) {
        return res.status(200).json({
            message: 'File uploaded successfully',
            file: req.file // Mengembalikan informasi file yang di-upload
        });
    } else {
        return res.status(400).json({ message: 'File upload failed' });
    }
};

module.exports = uploadFile;
