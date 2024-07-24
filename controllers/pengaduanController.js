const Pengaduan = require('../models/pengaduan');

exports.createPengaduan = async (req, res) => {
  try {
    // Tambahkan ID pengguna dari token JWT ke pengaduan
    const pengaduan = new Pengaduan({
      ...req.body,
      user: req.user.id // user id dari token
    });
    await pengaduan.save();
    res.status(201).send(pengaduan);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getPengaduan = async (req, res) => {
  try {
    // Mendapatkan pengaduan yang terkait dengan pengguna yang terautentikasi
    const pengaduan = await Pengaduan.find({ user: req.user.id }).populate('user');
    res.status(200).send(pengaduan);
  } catch (err) {
    res.status(500).send(err);
  }
};
