const dbPool = require('../config/database');

// Mendapatkan semua pengguna
const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';
    return dbPool.execute(SQLQuery);
};

// Membuat pengguna baru
const createNewUser = (body) => {
    const SQLQuery = `INSERT INTO users (Fullname, Username, Email, Password, Token) 
                      VALUES (?, ?, ?, ?, ?)`; // Menambahkan Token di sini
    return dbPool.execute(SQLQuery, [body.fullname, body.username, body.email, body.password, body.token]);
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

// Mencari pengguna berdasarkan token
const findByToken = (token) => {
    const SQLQuery = 'SELECT * FROM users WHERE Token = ?';
    return dbPool.execute(SQLQuery, [token]);
};

// Mengaktifkan akun pengguna berdasarkan ID
const activateUser = (idUser) => {
    const SQLQuery = 'UPDATE users SET IsActive = 1 WHERE ID_User = ?'; // Asumsikan ada field IsActive
    return dbPool.execute(SQLQuery, [idUser]);
};

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
    findByEmail,
    findByToken,
    activateUser,
};
