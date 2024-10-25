const EpisodeMovieModel = require('../models/episode_movie');

const getAllEpisodeMovies = async (req, res) => {
    try {
        const [data] = await EpisodeMovieModel.getAllEpisodeMovies();
        res.json({
            message: 'GET all Episode Movies success',
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};

const createNewEpisodeMovie = async (req, res) => {
    const { body } = req;
    if (!body.Judul || !body.Durasi || !body.Tanggal_Rilis || !body.ID_SeriesFilm) {
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        });
    }

    try {
        await EpisodeMovieModel.createNewEpisodeMovie(body);
        res.status(201).json({
            message: 'CREATE new Episode Movie success',
            data: body,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};

const updateEpisodeMovie = async (req, res) => {
    const { idEpisodeMovie } = req.params;
    const { body } = req;
    try {
        await EpisodeMovieModel.updateEpisodeMovie(body, idEpisodeMovie);
        res.json({
            message: 'UPDATE Episode Movie success',
            data: {
                id: idEpisodeMovie,
                ...body,
            },
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};

const deleteEpisodeMovie = async (req, res) => {
    const { idEpisodeMovie } = req.params;
    try {
        await EpisodeMovieModel.deleteEpisodeMovie(idEpisodeMovie);
        res.json({
            message: 'DELETE Episode Movie success',
            data: null,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};

module.exports = {
    getAllEpisodeMovies,
    createNewEpisodeMovie,
    updateEpisodeMovie,
    deleteEpisodeMovie,
};
