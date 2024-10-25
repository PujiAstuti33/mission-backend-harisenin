// index.js
require('dotenv').config();
const PORT = process.env.PORT || 5173;
const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Import routes
const usersRoutes = require('./routes/users');
const verifyEmailRoutes = require('./routes/verifyEmail');
const moviesRoutes = require('./routes/movies');
const daftarSayaRoutes = require('./routes/daftar_saya');
const genreRoutes = require('./routes/genre');
const seriesFilmRoutes = require('./routes/series_film');
const episodeMovieRoutes = require('./routes/episode_movie');
const paketsRoutes = require('./routes/pakets');
const ordersRoutes = require('./routes/orders');
const pembayaranRoutes = require('./routes/pembayaran');
const uploadRoutes = require('./routes/upload');

// Middleware
const middlewareLogRequest = require('./middleware/logs');

// Define multer storage and file filter
const uploadDir = 'upload'; // Tentukan folder upload
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const timestamp = new Date().getTime();
        const originalname = file.originalname;
        cb(null, `${timestamp}-${originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
        return cb(null, true);
    }
    cb(new Error('Error: File upload hanya dapat berupa gambar!'));
};

// Initialize express
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(middlewareLogRequest);
app.use(express.json());

// Routes
app.use("/upload", uploadRoutes);

// Routing with prisma
app.use('/users', usersRoutes);
app.use('/verifyEmail', verifyEmailRoutes);
app.use('/movies', moviesRoutes);
app.use('/daftar_saya', daftarSayaRoutes);
app.use('/genre', genreRoutes);
app.use('/series_film', seriesFilmRoutes);
app.use('/episode_movie', episodeMovieRoutes);
app.use('/pakets', paketsRoutes);
app.use('/orders', ordersRoutes);
app.use('/pembayaran', pembayaranRoutes);

// Handling multer errors and other errors
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        console.error('Multer Error:', err.message); // Log error multer
        res.status(400).json({ message: err.message });
    } else if (err) {
        console.error('Error:', err.message); // Log error umum
        res.status(500).json({ message: err.message });
    } else {
        next();
    }
});

// 404 Not Found
app.use((req, res) => {
    res.status(404).json({
        message: 'Not Found'
    });
});

// Server listen
app.listen(PORT, () => {
    console.log(`Server berhasil di running di port ${PORT}`);
});

console.log('Routes have been imported successfully.');
