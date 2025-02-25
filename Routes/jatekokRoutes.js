const express = require('express');
const {OsszesJatekok, JatekLetrehozasAdmin, KeresoMezo, OsszesJatekokAdmin, JatekTorlesAdmin} = require('../Controllers/jatekokController');
const router = express.Router();

router.get('/', OsszesJatekok);
router.post('/', KeresoMezo);
router.get('/admin', OsszesJatekokAdmin);
router.post('/admin', JatekTorlesAdmin)
router.post('/admin', JatekLetrehozasAdmin);


module.exports = router;