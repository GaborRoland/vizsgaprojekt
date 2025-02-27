const express = require('express');
const {JatekLetrehozasAdmin, OsszesJatekokAdmin, JatekTorlesAdmin} = require('../Controllers/jatekokController');
const {OsszesKategoriak, KategoriaLetrehozas, KategoriaTorles, KategoriaFrissites} = require('../Controllers/kategoriakController');
const {AdminfelhasznaloLetrehozas, Felhasznalok, FelhasznaloTorles,  FelhasznaloFrissites } = require('../Controllers/felhasznalokController');
const router = express.Router();

router.get('/', OsszesJatekokAdmin, OsszesKategoriak);
router.post('/torles', JatekTorlesAdmin)
router.post('/hozzaadas', JatekLetrehozasAdmin);

//Layout
router.get('/kategoria', OsszesKategoriak);
router.post('/kategtorles', KategoriaTorles);
router.post('/kateghozzaadas', KategoriaLetrehozas);
router.post('/kategfrissites', KategoriaFrissites);

router.get('/felhasznalo', Felhasznalok);
router.post('/felhasztorles', FelhasznaloTorles);
router.post('/felhaszhozzaadas', AdminfelhasznaloLetrehozas);
router.post('/felhaszfrissites', FelhasznaloFrissites);

module.exports = router;