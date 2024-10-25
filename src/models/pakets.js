const dbPool = require('../config/database');

const getAllPakets = () => {
    const SQLQuery = 'SELECT * FROM pakets'; 
    return dbPool.execute(SQLQuery);
};

const createNewPakets = (body) => {
    const SQLQuery = `INSERT INTO pakets (Nama, Harga, Durasi) 
                      VALUES (?, ?, ?)`;
    return dbPool.execute(SQLQuery, [body.Nama, body.Harga, body.Durasi]);
};

const updatePakets = (body, idPakets) => {
    const SQLQuery = `UPDATE pakets 
                      SET Nama = ?, Harga = ?, Durasi = ? 
                      WHERE ID_Pakets = ?`; 
    return dbPool.execute(SQLQuery, [body.Nama, body.Harga, body.Durasi, idPakets]);
};

const deletePakets = (idPakets) => {
    const SQLQuery = 'DELETE FROM pakets WHERE ID_Pakets = ?';
    return dbPool.execute(SQLQuery, [idPakets]);
};

module.exports = {
    getAllPakets,
    createNewPakets,
    updatePakets,
    deletePakets,
};
