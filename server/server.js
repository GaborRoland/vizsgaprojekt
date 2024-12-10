const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const FelhasznalokRoutes = require('../Routes/felhasznalokRoutes'); // Importálás a route-ot

app.use(express.json()); // JSON adatokat tud fogadni
app.use(express.static(path.join(__dirname, '../login'))); // statikus fájlok (pl. HTML, CSS, JS)

app.use(express.urlencoded({ extended: true })); // Az űrlapadatokat URL-kódolva tudja kezelni

// Kezdő oldal, amely a login/index.html fájlt szolgáltatja
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login', 'index.html')); 
});

// Felhasználói route-ok
app.use('/users', FelhasznalokRoutes); // /users route kezelés
app.use('/', FelhasznalokRoutes); // Az alap URL-hez is rendeljük a felhasználói route-okat

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`); // Szerver elindítása
});
