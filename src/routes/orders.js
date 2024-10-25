const express = require('express');
const OrdersController = require('../controller/orders.js');
const { ordersValidationRules } = require('../middleware/ordersValidator');

const router = express.Router();

// CREATE - POST
router.post('/', ordersValidationRules(), OrdersController.createNewOrder);

// READ - GET 
router.get('/', OrdersController.getAllOrders);

// UPDATE - PATCH
router.patch('/:idOrder', OrdersController.updateOrder);

// DELETE - DELETE
router.delete('/:idOrder', OrdersController.deleteOrder);

module.exports = router;
