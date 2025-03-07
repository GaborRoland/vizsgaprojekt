const express = require('express');
const { OsszesJatekok, KeresoMezo } = require('../Controllers/jatekokController');
const router = express.Router();

//Játékok átadása a főoldalnak, keresés
router.get('/', OsszesJatekok);
router.post('/', KeresoMezo);


module.exports = router;