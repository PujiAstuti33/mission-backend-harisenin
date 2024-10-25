const SeriesFilmModel = require('../models/series_film');

const getAllSeriesFilm = async (req, res) => {
    try {
        const [data] = await SeriesFilmModel.getAllSeriesFilm();
        res.json({
            message: 'GET all Series Film success',
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};

const createNewSeriesFilm = async (req, res) => {
    const { body } = req;
    if (!body.Judul || !body.Deskripsi || !body.ID_Genre || !body.Tipe) {
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        });
    }

    try {
        await SeriesFilmModel.createNewSeriesFilm(body);
        res.status(201).json({
            message: 'CREATE new Series Film success',
            data: body,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};

const updateSeriesFilm = async (req, res) => {
    const { idSeriesFilm } = req.params;
    const { body } = req;
    try {
        await SeriesFilmModel.updateSeriesFilm(body, idSeriesFilm);
        res.json({
            message: 'UPDATE Series Film success',
            data: {
                id: idSeriesFilm,
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

const deleteSeriesFilm = async (req, res) => {
    const { idSeriesFilm } = req.params;
    try {
        await SeriesFilmModel.deleteSeriesFilm(idSeriesFilm);
        res.json({
            message: 'DELETE Series Film success',
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
    getAllSeriesFilm,
    createNewSeriesFilm,
    updateSeriesFilm,
    deleteSeriesFilm,
};
