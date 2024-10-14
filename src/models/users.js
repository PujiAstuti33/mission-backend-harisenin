const dbPool = require('../config/database');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';
    return dbPool.execute(SQLQuery);
}

const createNewUser = (body) => {
    const SQLQuery = `INSERT INTO users (name, email, address) 
                      VALUES (?, ?, ?)`;
    return dbPool.execute(SQLQuery, [body.name, body.email, body.address]); 
}

const updateUser = (body, idUser) => {
    const SQLQuery = `UPDATE users 
                      SET name = ?, email = ?, address = ? 
                      WHERE id = ?`;
    return dbPool.execute(SQLQuery, [body.name, body.email, body.address, idUser]); 
}

const deleteUser = (idUser) => {
    const SQLQuery = 'DELETE FROM users WHERE id = ?';
    return dbPool.execute(SQLQuery, [idUser]);
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}
