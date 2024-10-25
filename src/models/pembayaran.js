const dbPool = require('../config/database');

const getAllPembayaran = () => {
    const SQLQuery = 'SELECT * FROM pembayaran';
    return dbPool.execute(SQLQuery);
}

const createNewPembayaran = (body) => {
    const SQLQuery = `INSERT INTO pembayaran (ID_User, ID_Order) 
                      VALUES (?, ?)`;
    return dbPool.execute(SQLQuery, [body.ID_User, body.ID_Order]);
}

const updatePembayaran = (body, idPembayaran) => {
    const SQLQuery = `UPDATE pembayaran 
                      SET ID_User = ?, ID_Order = ? 
                      WHERE ID_Pembayaran = ?`;
    return dbPool.execute(SQLQuery, [body.ID_User, body.ID_Order, idPembayaran]);
}

const deletePembayaran = (idPembayaran) => {
    const SQLQuery = 'DELETE FROM pembayaran WHERE ID_Pembayaran = ?';
    return dbPool.execute(SQLQuery, [idPembayaran]);
}

module.exports = {
    getAllPembayaran,
    createNewPembayaran,
    updatePembayaran,
    deletePembayaran,
}
