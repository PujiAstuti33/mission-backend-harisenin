const dbPool = require('../config/database');

const getAllMovies = () => {
    const SQLQuery = 'SELECT * FROM movies';
    return dbPool.execute(SQLQuery);
}

const getMovieById = (idMovie) => {
    const SQLQuery = 'SELECT * FROM movies WHERE id = ?';
    return dbPool.execute(SQLQuery, [idMovie]);  
}

const createNewMovie = (body) => {
    const SQLQuery = `INSERT INTO movies (title, genre, releaseYear) 
                      VALUES (?, ?, ?)`;
    return dbPool.execute(SQLQuery, [body.title, body.genre, body.releaseYear]);  
}

const updateMovie = (body, idMovie) => {
    const SQLQuery = `UPDATE movies 
                      SET title = ?, genre = ?, releaseYear = ? 
                      WHERE id = ?`;
    return dbPool.execute(SQLQuery, [body.title, body.genre, body.releaseYear, idMovie]);  
}

const deleteMovie = (idMovie) => {
    const SQLQuery = 'DELETE FROM movies WHERE id = ?';
    return dbPool.execute(SQLQuery, [idMovie]);  
}

module.exports = {
    getAllMovies,
    getMovieById,
    createNewMovie,
    updateMovie,
    deleteMovie,
}
