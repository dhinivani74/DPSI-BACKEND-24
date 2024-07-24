const Admin = require('../models/admin');
const ProsesPengaduan = require('../models/prosesPengaduan');

// Contoh fungsi untuk menambahkan Admin
exports.createAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newAdmin = new Admin({ name, email, password });
        await newAdmin.save();
        res.status(201).json(newAdmin);
    } catch (error) {
        res.status(500).json({ message: 'Error creating admin', error });
    }
};

// Contoh fungsi untuk mendapatkan semua Admin
exports.getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.find().populate('proses_pengaduan');
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching admins', error });
    }
};
