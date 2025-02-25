const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
require('../Models/associations'); //Itt állítjuk be a kapcsolatokat


const FelhasznalokRoutes = require('../Routes/felhasznalokRoutes'); // Importálás a route-ot
const JatekokRoutes = require('../Routes/jatekokRoutes');
const kategoriakRoutes = require('../Routes/kategoriakRoutes');

app.use(express.json()); // JSON adatokat tud fogadni
app.use('/login', express.static(path.join(__dirname, '../login')));
app.use('/src', express.static(path.join(__dirname, '../login/src')));
app.use(express.static(path.join(__dirname, '../login'))); // statikus fájlok (pl. HTML, CSS, JS)
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // Az űrlapadatokat URL-kódolva tudja kezelni

//EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));


app.get('/dashboard-xyz123', (req, res) => {
     res.render(path.join(__dirname, '../views', 'admin'));
 });

//Routes
app.use('/users', FelhasznalokRoutes);
app.use('/', JatekokRoutes);
app.use('/kategoriak', kategoriakRoutes);

//Admin routes
app.use("/admin/hozzaadas", JatekokRoutes);
app.use("/admin/torles", JatekokRoutes);



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`); // Szerver elindítása
});
