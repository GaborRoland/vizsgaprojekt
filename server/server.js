const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session')
require('../Models/associations');
require('dotenv').config();


const FelhasznalokRoutes = require('../Routes/felhasznalokRoutes');
const JatekokRoutes = require('../Routes/jatekokRoutes');
const AdminRoutes = require('../Routes/adminRoutes');
const kategoriakRoutes = require('../Routes/kategoriakRoutes');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }
}));

app.use(express.json());
app.use('/login', express.static(path.join(__dirname, '../login')));
app.use('/src', express.static(path.join(__dirname, '../login/src')));
app.use(express.static(path.join(__dirname, '../login')));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use("/dashboard-xyz123", AdminRoutes);

app.use('/users', FelhasznalokRoutes);
app.use('/', JatekokRoutes);
app.use('/kategoriak', kategoriakRoutes);


app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`)});
