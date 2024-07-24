const express = require('express');
const router = express.Router();
const pengaduanController = require('../controllers/pengaduanController');

router.post('/', pengaduanController.createPengaduan);
router.get('/', pengaduanController.getPengaduan);

module.exports = router;
