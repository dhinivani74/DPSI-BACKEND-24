// routes/prosesPengaduanRoutes.js
const express = require('express');
const router = express.Router();
const prosesPengaduanController = require('../controllers/prosesPengaduanController');

router.post('/', prosesPengaduanController.createProsesPengaduan);
router.get('/:pengaduanId', prosesPengaduanController.getProsesPengaduanByPengaduanId);

module.exports = router;
