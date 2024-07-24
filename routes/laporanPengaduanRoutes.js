// routes/laporanPengaduanRoutes.js
const express = require('express');
const router = express.Router();
const laporanPengaduanController = require('../controllers/laporanPengaduanController');

// Routes for laporan pengaduan
router.post('/', laporanPengaduanController.createLaporan);
router.get('/', laporanPengaduanController.getLaporan);
router.get('/:id', laporanPengaduanController.getLaporanById);
router.put('/:id', laporanPengaduanController.updateLaporan);
router.delete('/:id', laporanPengaduanController.deleteLaporan);

module.exports = router;
