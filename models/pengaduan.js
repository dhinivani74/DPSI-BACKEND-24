// models/pengaduan.js
const mongoose = require('mongoose');

const pengaduanSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
});

const Pengaduan = mongoose.model('Pengaduan', pengaduanSchema);

module.exports = Pengaduan;
