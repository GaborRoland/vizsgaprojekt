const express = require('express');
const {OsszesJatekok, JatekLetrehozas, KeresoMezo} = require('../Controllers/jatekokController');
const router = express.Router();

router.get('/', OsszesJatekok);
router.post('/hozzaadas', JatekLetrehozas);
router.post('/', KeresoMezo);


module.exports = router;