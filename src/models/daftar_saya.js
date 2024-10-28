const dbPool = require('../config/database');

const getAllDaftarSaya = (queryParams) => {
    // Ambil parameter dari queryParams
    const { ID_User, sortBy = 'Tanggal_Ditambahkan', order = 'ASC', search = '' } = queryParams;

    // Buat SQL Query dengan kondisi filter, sort, dan search
    let SQLQuery = 'SELECT * FROM daftar_saya WHERE 1=1';

    // Filter berdasarkan ID_User jika ada
    if (ID_User) {
        SQLQuery += ` AND ID_User = ${dbPool.escape(ID_User)}`;
    }

    // Tambahkan search pada judul episode movie
    if (search) {
        SQLQuery += ` AND EXISTS (SELECT 1 FROM episode_movie WHERE daftar_saya.ID_EpisodeMovie = episode_movie.ID_EpisodeMovie AND episode_movie.Judul LIKE ${dbPool.escape('%' + search + '%')})`;
    }

    // Tambahkan sorting
    SQLQuery += ` ORDER BY ${sortBy} ${order}`;

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
