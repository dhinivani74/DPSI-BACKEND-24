// models/laporanPengaduan.js
const mongoose = require('mongoose');

const laporanPengaduanSchema = new mongoose.Schema({
    judul: { type: String, required: true },
    isi: { type: String, required: true },
    pengadu: { type: String, required: true },
    prosesPengaduan: { type: mongoose.Schema.Types.ObjectId, ref: 'ProsesPengaduan' },
    tanggal: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LaporanPengaduan', laporanPengaduanSchema);
