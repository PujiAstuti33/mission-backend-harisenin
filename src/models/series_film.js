const dbPool = require('../config/database');

const getAllSeriesFilm = () => {
    const SQLQuery = 'SELECT * FROM series_film';
    return dbPool.execute(SQLQuery);
}

const createNewSeriesFilm = (body) => {
    const SQLQuery = `INSERT INTO series_film (Judul, Deskripsi, ID_Genre, Tipe) 
                      VALUES (?, ?, ?, ?)`;
    return dbPool.execute(SQLQuery, [body.Judul, body.Deskripsi, body.ID_Genre, body.Tipe]);
}

const updateSeriesFilm = (body, idSeriesFilm) => {
    const SQLQuery = `UPDATE series_film 
                      SET Judul = ?, Deskripsi = ?, ID_Genre = ?, Tipe = ? 
                      WHERE ID_SeriesFilm = ?`;
    return dbPool.execute(SQLQuery, [body.Judul, body.Deskripsi, body.ID_Genre, body.Tipe, idSeriesFilm]);
}

const deleteSeriesFilm = (idSeriesFilm) => {
    const SQLQuery = 'DELETE FROM series_film WHERE ID_SeriesFilm = ?';
    return dbPool.execute(SQLQuery, [idSeriesFilm]);
}

module.exports = {
    getAllSeriesFilm,
    createNewSeriesFilm,
    updateSeriesFilm,
    deleteSeriesFilm,
}
