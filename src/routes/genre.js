const express = require('express');
const GenreController = require('../controller/genre.js');
const { genreValidationRules } = require('../middleware/genreValidator');

const router = express.Router();

// CREATE - POST
router.post('/', genreValidationRules(), GenreController.createNewGenre);

// READ - GET 
router.get('/', GenreController.getAllGenres);

// UPDATE - PATCH
router.patch('/:idGenre', GenreController.updateGenre);

// DELETE - DELETE
router.delete('/:idGenre', GenreController.deleteGenre);

module.exports = router;
