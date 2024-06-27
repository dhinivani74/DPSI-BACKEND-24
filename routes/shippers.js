// routes/shipperRoutes.js

const express = require('express');
const router = express.Router();
const shipper = require('../controllers/shipper');

// Get all shippers
router.get('/', shipper.getAllShippers);

// Get a shipper by ID
router.get('/:id', shipper.getShipperById);

// Create a new shipper
router.post('/', shipper.createShipper);

// Update a shipper by ID
router.put('/:id', shipper.updateShipper);

// Delete a shipper by ID
router.delete('/:id', shipper.deleteShipper);

module.exports = router;
