const express = require('express');
const EpisodeMovieController = require('../controller/episode_movie.js');
const { episodeMovieValidationRules } = require('../middleware/episodeMovieValidator');

const router = express.Router();

// CREATE - POST
router.post('/', episodeMovieValidationRules(), EpisodeMovieController.createNewEpisodeMovie);

// READ - GET 
router.get('/', EpisodeMovieController.getAllEpisodeMovies);

// UPDATE - PATCH
router.patch('/:idEpisodeMovie', episodeMovieValidationRules(), EpisodeMovieController.updateEpisodeMovie);

// DELETE - DELETE
router.delete('/:idEpisodeMovie', EpisodeMovieController.deleteEpisodeMovie);

module.exports = router;
