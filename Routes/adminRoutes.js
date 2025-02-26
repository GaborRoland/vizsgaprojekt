const express = require('express');
const {JatekLetrehozasAdmin, OsszesJatekokAdmin, JatekTorlesAdmin} = require('../Controllers/jatekokController');
const router = express.Router();

router.get('/', OsszesJatekokAdmin);
// router.post('/admin', JatekTorlesAdmin)
// router.post('/admin', JatekLetrehozasAdmin);


module.exports = router;