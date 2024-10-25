const dbPool = require('../config/database');

const getAllEpisodeMovies = () => {
    const SQLQuery = 'SELECT * FROM episode_movie';
    return dbPool.execute(SQLQuery);
}

const createNewEpisodeMovie = (body) => {
    const SQLQuery = `INSERT INTO episode_movie (Judul, Durasi, Tanggal_Rilis, ID_SeriesFilm) 
                      VALUES (?, ?, ?, ?)`;
    return dbPool.execute(SQLQuery, [body.Judul, body.Durasi, body.Tanggal_Rilis, body.ID_SeriesFilm]);
}

const updateEpisodeMovie = (body, idEpisodeMovie) => {
    const SQLQuery = `UPDATE episode_movie 
                      SET Judul = ?, Durasi = ?, Tanggal_Rilis = ?, ID_SeriesFilm = ? 
                      WHERE ID_EpisodeMovie = ?`;
    return dbPool.execute(SQLQuery, [body.Judul, body.Durasi, body.Tanggal_Rilis, body.ID_SeriesFilm, idEpisodeMovie]);
}

const deleteEpisodeMovie = (idEpisodeMovie) => {
    const SQLQuery = 'DELETE FROM episode_movie WHERE ID_EpisodeMovie = ?';
    return dbPool.execute(SQLQuery, [idEpisodeMovie]);
}

module.exports = {
    getAllEpisodeMovies,
    createNewEpisodeMovie,
    updateEpisodeMovie,
    deleteEpisodeMovie,
}
