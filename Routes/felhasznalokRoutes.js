const express = require('express');
const router = express.Router();

const { felhasznaloBejelentkezes, felhasznaloLetrehozas, Felhasznalok, Logout, BackToMain } = require('../Controllers/felhasznalokController');

router.get('/', Felhasznalok);

router.get('/logout', Logout);
router.get('/backtomain', BackToMain);

router.post('/', felhasznaloLetrehozas);

router.post('/belepes', felhasznaloBejelentkezes);

module.exports = router;
