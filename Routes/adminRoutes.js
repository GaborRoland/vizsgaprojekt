const express = require('express');
const {JatekLetrehozasAdmin, OsszesJatekokAdmin, JatekTorlesAdmin} = require('../Controllers/jatekokController');
const {OsszesKategoriak, KategoriaLetrehozas, KategoriaTorles} = require('../Controllers/kategoriakController');
const {AdminfelhasznaloLetrehozas, Felhasznalok, FelhasznaloTorles } = require('../Controllers/felhasznalokController');
const router = express.Router();

router.get('/', OsszesJatekokAdmin, OsszesKategoriak);
router.post('/torles', JatekTorlesAdmin)
router.post('/hozzaadas', JatekLetrehozasAdmin);

//Layout
router.get('/kategoria', OsszesKategoriak);
router.post('/kategtorles', KategoriaTorles);
router.post('/kateghozzaadas', KategoriaLetrehozas);

router.get('/felhasznalo', Felhasznalok);
router.post('/felhasztorles', FelhasznaloTorles);
router.post('/felhaszhozzaadas', AdminfelhasznaloLetrehozas);

module.exports = router;