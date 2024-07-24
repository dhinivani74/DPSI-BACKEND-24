// models/ProsesPengaduan.js
const mongoose = require('mongoose');

const ProsesPengaduanSchema = new mongoose.Schema({
  pengaduanId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pengaduan', required: true },
  status: { type: String, enum: ['Diterima', 'Diproses', 'Selesai'], required: true },
  keterangan: { type: String },
  tanggalUpdate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ProsesPengaduan', ProsesPengaduanSchema);
