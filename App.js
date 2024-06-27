var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// endpoint dalam folder routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var categoriesRouter = require('./routes/categories'); // Impor rute categories
var authRouter = require('./routes/auth');
var sequelize = require('./models/index'); // Tambahkan ini untuk memuat


var app = express();

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads')); // Middleware untuk menyajikan file statis

// untuk memanggil/menjalankan
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/categories', categoriesRouter); // Gunakan rute categories
app.use('/auth', authRouter);

sequelize.sync()
 .then(() => {
    console.log('Database synchronized');
 })
 .catch(err => {
    console.error('Error synchronizing database:', err);
 });

  
module.exports = app;