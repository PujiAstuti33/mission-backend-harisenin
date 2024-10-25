const DaftarSayaModel = require('../models/daftar_saya');

const getAllDaftarSaya = async (req, res) => {
    try {
        const [data] = await DaftarSayaModel.getAllDaftarSaya();
        res.json({
            message: 'GET all Daftar Saya success',
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};

const createNewDaftarSaya = async (req, res) => {
    const { body } = req;
    if (!body.ID_User || !body.ID_EpisodeMovie || !body.Tanggal_Ditambahkan) {
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        });
    }

    try {
        await DaftarSayaModel.createNewDaftarSaya(body);
        res.status(201).json({
            message: 'CREATE new Daftar Saya success',
            data: body,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};

const updateDaftarSaya = async (req, res) => {
    const { idDaftar } = req.params;
    const { body } = req;
    try {
        await DaftarSayaModel.updateDaftarSaya(body, idDaftar);
        res.json({
            message: 'UPDATE Daftar Saya success',
            data: {
                id: idDaftar,
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

const deleteDaftarSaya = async (req, res) => {
    const { idDaftar } = req.params;
    try {
        await DaftarSayaModel.deleteDaftarSaya(idDaftar);
        res.json({
            message: 'DELETE Daftar Saya success',
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
    getAllDaftarSaya,
    createNewDaftarSaya,
    updateDaftarSaya,
    deleteDaftarSaya,
};
