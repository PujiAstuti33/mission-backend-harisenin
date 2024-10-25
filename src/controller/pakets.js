const PaketsModel = require('../models/pakets');

const getAllPakets = async (req, res) => {
    try {
        const [data] = await PaketModel.getAllPakets();
        res.json({
            message: 'GET all Pakets success',
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};

const createNewPakets = async (req, res) => {
    const { body } = req;
    if (!body.Nama_Paket || !body.Harga) {
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        });
    }

    try {
        await PaketModel.createNewPaket(body);
        res.status(201).json({
            message: 'CREATE new Paket success',
            data: body,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};

const updatePakets = async (req, res) => {
    const { idPaket } = req.params;
    const { body } = req;
    try {
        await PaketModel.updatePaket(body, idPaket);
        res.json({
            message: 'UPDATE Paket success',
            data: {
                id: idPaket,
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

const deletePakets = async (req, res) => {
    const { idPaket } = req.params;
    try {
        await PaketModel.deletePaket(idPaket);
        res.json({
            message: 'DELETE Paket success',
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
    getAllPakets,
    createNewPakets,
    updatePakets,
    deletePakets,
};
