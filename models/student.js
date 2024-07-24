const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  kelas: {
    type: String,
    required: true
  },
  umur: {
    type: Number,
    required: true
  },
  alamat: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Student', studentSchema);
