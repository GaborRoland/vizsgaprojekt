const express = require('express');
const router = express.Router();

const { felhasznaloBejelentkezes, felhasznaloLetrehozas, Felhasznalok } = require('../Controllers/felhasznalokController');

router.get('/', Felhasznalok);

router.post('/', felhasznaloLetrehozas);

router.post('/belepes', felhasznaloBejelentkezes);

module.exports = router;
