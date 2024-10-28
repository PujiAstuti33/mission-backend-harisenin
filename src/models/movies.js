const dbPool = require('../config/database');

const getAllMovies = (reqQuery) => {
    let { genre, releaseYear, sortBy, search } = reqQuery;

    // Menyusun query dasar
    let SQLQuery = 'SELECT * FROM movies';
    const conditions = [];
    const params = [];

    // Menambahkan kondisi filter
    if (genre) {
        conditions.push('genre = ?');
        params.push(genre);
    }
    if (releaseYear) {
        conditions.push('releaseYear = ?');
        params.push(releaseYear);
    }
    if (search) {
        conditions.push('judul LIKE ?');
        params.push(`%${search}%`);
    }

    // Menggabungkan kondisi ke query
    if (conditions.length > 0) {
        SQLQuery += ' WHERE ' + conditions.join(' AND ');
    }

    // Menambahkan urutan
    const validSortColumns = ['judul', 'releaseYear', 'genre']; // Kolom yang valid
    if (sortBy && validSortColumns.includes(sortBy)) {
        SQLQuery += ` ORDER BY ${sortBy}`;
    } else {
        SQLQuery += ' ORDER BY judul'; // Default sort jika 'sortBy' tidak valid
    }

    return dbPool.execute(SQLQuery, params);
}
const getMovieById = (idMovie) => {
    const SQLQuery = 'SELECT * FROM movies WHERE id = ?';
    return dbPool.execute(SQLQuery, [idMovie]);  
}

const createNewMovie = (body) => {
    const SQLQuery = `INSERT INTO movies (judul, genre, releaseYear) 
                      VALUES (?, ?, ?)`;
    return dbPool.execute(SQLQuery, [body.judul, body.genre, body.releaseYear]);  
}

const updateMovie = (body, idMovie) => {
    const SQLQuery = `UPDATE movies 
                      SET judul = ?, genre = ?, releaseYear = ? 
                      WHERE id = ?`;
    return dbPool.execute(SQLQuery, [body.judul, body.genre, body.releaseYear, idMovie]);  
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
