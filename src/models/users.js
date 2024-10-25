const dbPool = require('../config/database');

// Mendapatkan semua pengguna
const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';
    return dbPool.execute(SQLQuery);
};

// Membuat pengguna baru
const createNewUser = (body) => {
    const SQLQuery = `INSERT INTO users (Fullname, Username, Email, Password) 
                      VALUES (?, ?, ?, ?)`;
    return dbPool.execute(SQLQuery, [body.fullname, body.username, body.email, body.password]);
};

// Memperbarui informasi pengguna
const updateUser = (body, idUser) => {
    const SQLQuery = `UPDATE users 
                      SET Fullname = ?, Username = ?, Email = ?, Password = ?
                      WHERE ID_User = ?`;
    return dbPool.execute(SQLQuery, [body.fullname, body.username, body.email, body.password, idUser]);
};

// Menghapus pengguna berdasarkan ID
const deleteUser = (idUser) => {
    const SQLQuery = 'DELETE FROM users WHERE ID_User = ?';
    return dbPool.execute(SQLQuery, [idUser]);
};

// Mencari pengguna berdasarkan email
const findByEmail = (email) => {
    const SQLQuery = 'SELECT * FROM users WHERE Email = ?';
    return dbPool.execute(SQLQuery, [email]);
};

// Mencari pengguna berdasarkan ID
const findById = (idUser) => {
    const SQLQuery = 'SELECT * FROM users WHERE ID_User = ?';
    return dbPool.execute(SQLQuery, [idUser]);
};

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
    findByEmail,
    findById,
};
