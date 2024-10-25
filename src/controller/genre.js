const GenreModel = require('../models/genre');

const getAllGenres = async (req, res) => {
    try {
        const [data] = await GenreModel.getAllGenres();
        res.json({
            message: 'GET all genres success',
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};

const createNewGenre = async (req, res) => {
    const { body } = req;
    if (!body.Nama_Genre) {
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        });
    }

    try {
        await GenreModel.createNewGenre(body);
        res.status(201).json({
            message: 'CREATE new genre success',
            data: body,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};

const updateGenre = async (req, res) => {
    const { idGenre } = req.params;
    const { body } = req;
    try {
        await GenreModel.updateGenre(body, idGenre);
        res.json({
            message: 'UPDATE genre success',
            data: {
                id: idGenre,
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

const deleteGenre = async (req, res) => {
    const { idGenre } = req.params;
    try {
        await GenreModel.deleteGenre(idGenre);
        res.json({
            message: 'DELETE genre success',
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
    getAllGenres,
    createNewGenre,
    updateGenre,
    deleteGenre,
};
