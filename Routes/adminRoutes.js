const express = require('express');
const {JatekLetrehozasAdmin, OsszesJatekokAdmin, JatekTorlesAdmin, JatekFrissites} = require('../Controllers/jatekokController');
const {OsszesKategoriak, KategoriaLetrehozas, KategoriaTorles, KategoriaFrissites} = require('../Controllers/kategoriakController');
const {AdminfelhasznaloLetrehozas, Felhasznalok, FelhasznaloTorles,  FelhasznaloFrissites } = require('../Controllers/felhasznalokController');
const router = express.Router();

//Játékok útvonalai
router.get('/', OsszesJatekokAdmin, OsszesKategoriak);
router.post('/torles', JatekTorlesAdmin)
router.post('/hozzaadas', JatekLetrehozasAdmin);
router.post('/jatekfrissites', JatekFrissites);

//Kategória útvonalai
router.get('/kategoria', OsszesKategoriak);
router.post('/kategtorles', KategoriaTorles);
router.post('/kateghozzaadas', KategoriaLetrehozas);
router.post('/kategfrissites', KategoriaFrissites);

//Felhasználó útvonalai
router.get('/felhasznalo', Felhasznalok);
router.post('/felhasztorles', FelhasznaloTorles);
router.post('/felhaszhozzaadas', AdminfelhasznaloLetrehozas);
router.post('/felhaszfrissites', FelhasznaloFrissites);


module.exports = router;