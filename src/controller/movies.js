const MoviesModel = require('../models/movies');

const getAllMovies = async (req, res) => {
    try {
        const filters = {
            genre: req.query.genre,
            releaseYear: req.query.releaseYear,
            search: req.query.search,
            sortBy: req.query.sortBy, // Misalnya 'judul' atau 'releaseYear'
        };

        const [movies] = await MoviesModel.getAllMovies(filters); // Mengirimkan filters ke model

        res.json({
            message: 'GET all movies success',
            data: movies
        });
    } catch (error) {
        console.error(error); // Menambahkan log untuk debugging
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}

const getMovieById = async (req, res) => {
    const { id } = req.params;
    try {
        const [movie] = await MoviesModel.getMovieById(id);
        res.json({
            message: 'GET movie by ID success',
            data: movie
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}

const createNewMovie = async (req, res) => {
    const {body} = req; 

    if (!body.judul || !body.genre || !body.releaseYear) {
        return res.status(400).json({
            message: 'Data yang dikirim tidak lengkap',
            data: null,
        });
    }

    try {
        await MoviesModel.createNewMovie(body);
        res.status(201).json({
            message: 'CREATE new movie success',
            data: body
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}

const updateMovie = async (req, res) => {
    const { idMovie } = req.params;
    const { body } = req; 
    try {
        await MoviesModel.updateMovie(body, idMovie);
        res.json({
            message: 'UPDATE movie success',
            data: { 
                id: idMovie,
                ...body 
            },
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}

const deleteMovie = async (req, res) => {
    const {idMovie} = req.params; 
    try {
        await MoviesModel.deleteMovie(idMovie);
        res.json({
            message: 'DELETE movie success',
            data: null
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}

module.exports = {
    getAllMovies,
    getMovieById,
    createNewMovie,
    updateMovie,
    deleteMovie,
}
