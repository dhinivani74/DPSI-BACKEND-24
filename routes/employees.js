// routes/employeeRoutes.js

const express = require('express');
const router = express.Router();
const employee = require('../models/employee');

// Get all employees
router.get('/', employee.getAllEmployees);

// Get an employee by ID
router.get('/:id', employee.getEmployeeById);

// Create a new employee
router.post('/', employee.createEmployee);

// Update an employee by ID
router.put('/:id', employee.updateEmployee);

// Delete an employee by ID
router.delete('/:id', employee.deleteEmployee);

module.exports = router;
