const express = require('express');
const MoviesController = require('../controller/movies.js');

const router = express.Router();

// CREATE - POST
router.post('/', MoviesController.createNewMovie);

// READ - GET all movies
router.get('/', MoviesController.getAllMovies);

// READ - GET movie by ID
router.get('/:idMovie', MoviesController.getMovieById);

// UPDATE - PATCH movie
router.patch('/:idMovie', MoviesController.updateMovie);

// DELETE - DELETE movie
router.delete('/:idMovie', MoviesController.deleteMovie);

module.exports = router;
