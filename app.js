const express = require('express');
const connectDB = require('./config/db');

const studentRoutes = require('./routes/studentRoutes');
const pengaduanRoutes = require('./routes/pengaduanRoutes');
const prosesPengaduanRoutes = require('./routes/prosesPengaduanRoutes');
const adminRoutes = require('./routes/adminRoutes');
const laporanPengaduanRoutes = require('./routes/laporanPengaduanRoutes');
const userRoutes = require('./routes/userRoutes');
// const protectedRoutes = require('./routes/protectedRoutes');

const app = express();

// Middleware
app.use(express.json());

// connect database
connectDB();

// Routes
app.use('/api/students', studentRoutes);
app.use('/pengaduan', pengaduanRoutes);
app.use('/prosesPengaduan', prosesPengaduanRoutes);
app.use('/admin', adminRoutes);
app.use('/api/laporanPengaduan', laporanPengaduanRoutes); 
app.use('/api/users', userRoutes); 
// app.use('/api/protected', protectedRoutes);

// Jalankan server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
