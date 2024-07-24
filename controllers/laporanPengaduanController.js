// controllers/laporanPengaduanController.js
const LaporanPengaduan = require('../models/laporanPengaduan');

// Create a new laporan pengaduan
exports.createLaporan = async (req, res) => {
    try {
        const laporan = new LaporanPengaduan(req.body);
        await laporan.save();
        res.status(201).json(laporan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all laporan pengaduan
exports.getLaporan = async (req, res) => {
    try {
        const laporans = await LaporanPengaduan.find().populate('prosesPengaduan');
        res.status(200).json(laporans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get laporan by ID
exports.getLaporanById = async (req, res) => {
    try {
        const laporan = await LaporanPengaduan.findById(req.params.id).populate('prosesPengaduan');
        if (!laporan) return res.status(404).json({ message: 'Laporan not found' });
        res.status(200).json(laporan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update laporan pengaduan
exports.updateLaporan = async (req, res) => {
    try {
        const laporan = await LaporanPengaduan.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!laporan) return res.status(404).json({ message: 'Laporan not found' });
        res.status(200).json(laporan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete laporan pengaduan
exports.deleteLaporan = async (req, res) => {
    try {
        const laporan = await LaporanPengaduan.findByIdAndDelete(req.params.id);
        if (!laporan) return res.status(404).json({ message: 'Laporan not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
