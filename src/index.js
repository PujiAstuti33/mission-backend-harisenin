// index.js
require('dotenv').config();
const PORT = process.env.PORT || 5173;
const express = require('express');
const morgan = require('morgan');
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

// Middleware
const middlewareLogRequest = require('./middleware/logs');
const upload = require('./middleware/multer')

// Initialize express
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(middlewareLogRequest);
app.use(express.json());
app.use('/assets', express.static('upload/images'));


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

app.post('/upload',upload.single('image'), (req, res) => {
    res.json({
        message: 'Upload berhasil'
    })
})


app.listen(PORT, () => {
    console.log(`Server berhasil di running di port ${PORT}`);
});

console.log('Routes have been imported successfully.');
