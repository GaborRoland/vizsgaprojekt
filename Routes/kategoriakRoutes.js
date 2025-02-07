const express = require('express');
const router = express.Router();
const kategoriakController = require('../Controllers/kategoriakController');

// Összes kategória lekérése
router.get('/', kategoriakController.OsszesKategoriak);

// Új kategória létrehozása
router.post('/', kategoriakController.KategoriaLetrehozas);

module.exports = router;
