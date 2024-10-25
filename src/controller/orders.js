const OrdersModel = require('../models/orders');

const getAllOrders = async (req, res) => {
    try {
        const [data] = await OrdersModel.getAllOrders();
        res.json({
            message: 'GET all Orders success',
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};

const createNewOrder = async (req, res) => {
    const { body } = req;
    if (!body.ID_User || !body.ID_Paket || !body.Tanggal_Order) {
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        });
    }

    try {
        await OrdersModel.createNewOrder(body);
        res.status(201).json({
            message: 'CREATE new Order success',
            data: body,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};

const updateOrder = async (req, res) => {
    const { idOrder } = req.params;
    const { body } = req;
    try {
        await OrdersModel.updateOrder(body, idOrder);
        res.json({
            message: 'UPDATE Order success',
            data: {
                id: idOrder,
                ...body,
            },
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};

const deleteOrder = async (req, res) => {
    const { idOrder } = req.params;
    try {
        await OrdersModel.deleteOrder(idOrder);
        res.json({
            message: 'DELETE Order success',
            data: null,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};

module.exports = {
    getAllOrders,
    createNewOrder,
    updateOrder,
    deleteOrder,
};
