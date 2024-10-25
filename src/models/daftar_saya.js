const dbPool = require('../config/database');

const getAllDaftarSaya = () => {
    const SQLQuery = 'SELECT * FROM daftar_saya';
    return dbPool.execute(SQLQuery);
}

const createNewDaftarSaya = (body) => {
    const SQLQuery = `INSERT INTO daftar_saya (ID_User, ID_EpisodeMovie, Tanggal_Ditambahkan) 
                      VALUES (?, ?, ?)`;
    return dbPool.execute(SQLQuery, [body.ID_User, body.ID_EpisodeMovie, body.Tanggal_Ditambahkan]);
}

const updateDaftarSaya = (body, idDaftar) => {
    const SQLQuery = `UPDATE daftar_saya 
                      SET ID_User = ?, ID_EpisodeMovie = ?, Tanggal_Ditambahkan = ? 
                      WHERE ID_Daftar = ?`;
    return dbPool.execute(SQLQuery, [body.ID_User, body.ID_EpisodeMovie, body.Tanggal_Ditambahkan, idDaftar]);
}

const deleteDaftarSaya = (idDaftar) => {
    const SQLQuery = 'DELETE FROM daftar_saya WHERE ID_Daftar = ?';
    return dbPool.execute(SQLQuery, [idDaftar]);
}

module.exports = {
    getAllDaftarSaya,
    createNewDaftarSaya,
    updateDaftarSaya,
    deleteDaftarSaya,
}
