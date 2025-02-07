const express = require('express');
const {OsszesJatekok, JatekLetrehozas} = require('../Controllers/jatekokController');
const router = express.Router();

router.get('/', OsszesJatekok);
router.post('/hozzaadas', JatekLetrehozas);

module.exports = router;