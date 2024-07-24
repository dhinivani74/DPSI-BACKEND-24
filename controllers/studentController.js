const Student = require('../models/student');

// Mendapatkan semua siswa
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Membuat siswa baru
exports.createStudent = async (req, res) => {
  const student = new Student({
    nama: req.body.nama,
    kelas: req.body.kelas,
    umur: req.body.umur,
    alamat: req.body.alamat
  });

  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
