const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const FelhasznalokRoutes = require('../Routes/felhasznalokRoutes'); // Importálás a route-ot
const JatekokRoutes = require('../Routes/jatekokRoutes');
// const KategoriakRoutes = require('..Routes/kategoriakRoutes');

app.use(express.json()); // JSON adatokat tud fogadni
app.use(express.static(path.join(__dirname, '../login'))); // statikus fájlok (pl. HTML, CSS, JS)
app.use(express.urlencoded({ extended: true })); // Az űrlapadatokat URL-kódolva tudja kezelni

//EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Kezdő oldal, amely a login/index.html fájlt szolgáltatja
app.get('/', (req, res) => {
    res.render(path.join(__dirname, '../views', 'index')); 
});

// Felhasználói route-ok
app.use('/users', FelhasznalokRoutes); // /users route kezelés
app.use('/', FelhasznalokRoutes); // Az alap URL-hez is rendeljük a felhasználói route-okat

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`); // Szerver elindítása
});
