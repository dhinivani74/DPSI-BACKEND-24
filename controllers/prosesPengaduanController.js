// controllers/prosesPengaduanController.js
const ProsesPengaduan = require('../models/prosesPengaduan');

exports.createProsesPengaduan = async (req, res) => {
  try {
    const prosesPengaduan = new ProsesPengaduan(req.body);
    await prosesPengaduan.save();
    res.status(201).json(prosesPengaduan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getProsesPengaduanByPengaduanId = async (req, res) => {
  try {
    const prosesPengaduan = await ProsesPengaduan.find({ pengaduanId: req.params.pengaduanId });
    res.status(200).json(prosesPengaduan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
