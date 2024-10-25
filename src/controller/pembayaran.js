const PembayaranModel = require('../models/pembayaran');

const getAllPembayaran = async (req, res) => {
    try {
        const [data] = await PembayaranModel.getAllPembayaran();
        res.json({
            message: 'GET all Pembayaran success',
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};

const createNewPembayaran = async (req, res) => {
    const { body } = req;
    if (!body.ID_Order || !body.ID_User) {
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        });
    }

    try {
        await PembayaranModel.createNewPembayaran(body);
        res.status(201).json({
            message: 'CREATE new Pembayaran success',
            data: body,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};

const updatePembayaran = async (req, res) => {
    const { idPembayaran } = req.params;
    const { body } = req;
    try {
        await PembayaranModel.updatePembayaran(body, idPembayaran);
        res.json({
            message: 'UPDATE Pembayaran success',
            data: {
                id: idPembayaran,
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

const deletePembayaran = async (req, res) => {
    const { idPembayaran } = req.params;
    try {
        await PembayaranModel.deletePembayaran(idPembayaran);
        res.json({
            message: 'DELETE Pembayaran success',
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
    getAllPembayaran,
    createNewPembayaran,
    updatePembayaran,
    deletePembayaran,
};
