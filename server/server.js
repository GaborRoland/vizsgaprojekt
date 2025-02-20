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


// Kezdő oldal, amely a login/index.html fájlt szolgáltatja
app.get('/dashboard-xyz123', (req, res) => {
     res.render(path.join(__dirname, '../views', 'admin'));
 });

// Felhasználói route-ok
app.use('/users', FelhasznalokRoutes); // /users route kezelés
//app.use('/', FelhasznalokRoutes); // Az alap URL-hez is rendeljük a felhasználói route-okat
app.use('/', JatekokRoutes);
app.use('/kategoriak', kategoriakRoutes);


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`); // Szerver elindítása
});
