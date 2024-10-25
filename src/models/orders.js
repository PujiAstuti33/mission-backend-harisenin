const dbPool = require('../config/database');

const getAllOrder = () => {
    const SQLQuery = 'SELECT * FROM orders';
    return dbPool.execute(SQLQuery);
}

const createNewOrder = (body) => {
    const SQLQuery = `INSERT INTO orders (ID_User, ID_Paket, Tanggal_Order, Status_Order) 
                      VALUES (?, ?, ?, ?)`;
    return dbPool.execute(SQLQuery, [body.ID_User, body.ID_Paket, body.Tanggal_Order, body.Status_Order]);
}

const updateOrder = (body, idOrder) => {
    const SQLQuery = `UPDATE orders 
                      SET ID_User = ?, ID_Paket = ?, Tanggal_Order = ?, Status_Order = ? 
                      WHERE ID_Order = ?`;
    return dbPool.execute(SQLQuery, [body.ID_User, body.ID_Paket, body.Tanggal_Order, body.Status_Order, idOrder]);
}

const deleteOrder = (idOrder) => {
    const SQLQuery = 'DELETE FROM orders WHERE ID_Order = ?';
    return dbPool.execute(SQLQuery, [idOrder]);
}

module.exports = {
    getAllOrder,
    createNewOrder,
    updateOrder,
    deleteOrder,
}
