const dbPool = require('../config/database');

const getAllGenre = () => {
    const SQLQuery = 'SELECT * FROM genre';
    return dbPool.execute(SQLQuery);
}

const createNewGenre = (body) => {
    const SQLQuery = `INSERT INTO genre (Nama_Genre) 
                      VALUES (?)`;
    return dbPool.execute(SQLQuery, [body.Nama_Genre]);
}

const updateGenre = (body, idGenre) => {
    const SQLQuery = `UPDATE genre 
                      SET Nama_Genre = ? 
                      WHERE ID_Genre = ?`;
    return dbPool.execute(SQLQuery, [body.Nama_Genre, idGenre]);
}

const deleteGenre = (idGenre) => {
    const SQLQuery = 'DELETE FROM genre WHERE ID_Genre = ?';
    return dbPool.execute(SQLQuery, [idGenre]);
}

module.exports = {
    getAllGenre,
    createNewGenre,
    updateGenre,
    deleteGenre,
}
