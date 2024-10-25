const express = require('express');
const SeriesFilmController = require('../controller/series_film.js');
const { seriesFilmValidationRules } = require('../middleware/seriesFilmValidator');

const router = express.Router();

// CREATE - POST
router.post('/', seriesFilmValidationRules(), SeriesFilmController.createNewSeriesFilm);

// READ - GET 
router.get('/', SeriesFilmController.getAllSeriesFilm);

// UPDATE - PATCH
router.patch('/:idSeriesFilm', SeriesFilmController.updateSeriesFilm);

// DELETE - DELETE
router.delete('/:idSeriesFilm', SeriesFilmController.deleteSeriesFilm);

module.exports = router;
