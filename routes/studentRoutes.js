const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Route untuk mendapatkan semua siswa
router.get('/', studentController.getAllStudents);

// Route untuk membuat siswa baru
router.post('/', studentController.createStudent);

module.exports = router;
