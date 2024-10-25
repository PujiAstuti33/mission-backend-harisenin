const logRequest = (req, res, next) => {
    try {
        console.log('Terjadi request ke PATH:', req.path);
        console.log('Metode HTTP:', req.method);
        console.log('Body permintaan:', req.body);
        
        next();
    } catch (error) {
        console.error('Terjadi kesalahan dalam middleware logRequest:', error);
        next(error); // Pastikan untuk memanggil next(error) jika terjadi kesalahan
    }
}

module.exports = logRequest;
