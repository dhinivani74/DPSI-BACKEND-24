// models/admin.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Foreign key ke tabel Pengaduan
  pengaduan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pengaduan', // Nama model pengaduan yang akan dirujuk
  }
}, { timestamps: true });

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
