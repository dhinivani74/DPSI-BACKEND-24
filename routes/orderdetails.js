// routes/orderDetailRoutes.js

const express = require('express');
const router = express.Router();
const orderDetailController = require('../controllers/orderDetail');
const orderdetail = require('../models/orderdetail');

// Get all order details
router.get('/', orderdetail.getAllOrderDetails);

// Get an order detail by ID
router.get('/:id', orderDetail.getOrderDetailById);

// Create a new order detail
router.post('/', orderDetail.createOrderDetail);

// Update an order detail by ID
router.put('/:id', orderDetail.updateOrderDetail);

// Delete an order detail by ID
router.delete('/:id', orderDetail.deleteOrderDetail);

module.exports = router;
