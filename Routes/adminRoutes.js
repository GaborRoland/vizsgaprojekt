const express = require('express');
const {JatekLetrehozasAdmin, OsszesJatekokAdmin, JatekTorlesAdmin} = require('../Controllers/jatekokController');
const router = express.Router();

router.get('/', OsszesJatekokAdmin);
router.post('/torles', JatekTorlesAdmin)
router.post('/hozzaadas', JatekLetrehozasAdmin);


module.exports = router;